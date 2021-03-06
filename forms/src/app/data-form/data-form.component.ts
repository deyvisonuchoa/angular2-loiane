import { VerificaEmailService } from './services/verifica-email.service';
import { FormValidations } from './../shared/form-validations';
import { Tecnologia } from './../shared/models/tecnologia';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Estado } from '../shared/models/estado';
import { DropdownService } from '../shared/services/dropdown.service';
import { EMPTY, empty, Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { Cidade } from '../shared/models/cidade';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {

  // form: FormGroup;
  estados: Estado[];
  cidades: Cidade[];
  //estados: Observable<Estado[]>;
  cargos: any[];
  tecnologias: Tecnologia[];
  newsletterOp: any[];

  frameworksList: string[] = ['react', 'vue', 'angular', 'express'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
    ) {
    super();
  }

  ngOnInit(): void {

    //this.verificaEmailService.verificarEmail('email@email.com').subscribe();

    /*this.dropdownService.getEstados()
      .subscribe(dados => this.estados = dados);*/

    this.dropdownService.getEstados()
      .subscribe((dados: Estado[]) => this.estados = dados);

    this.cargos = this.dropdownService.getCargos();

    this.tecnologias = this.dropdownService.getTecnologias();

    this.newsletterOp = this.dropdownService.getNewsletter();

    /*this.form = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),

      endereco: new FormGroup({
        cep: new FormControl(null),
        ...
      })
    });*/

    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email,], [this.validarEmail.bind(this)]],
      emailConfirmacao: [null, [Validators.required, Validators.email, FormValidations.equalsTo('email')]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null,[Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]]
      }),

      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, [Validators.pattern('true')]],
      frameworks: this.buildFrameworks()
    });

    this.form.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        switchMap(status => status === 'VALID' ?
          this.cepService.consultaCEP(this.form.get('endereco.cep').value)
          : EMPTY)
      )
      .subscribe(dados => dados ? this.populaEndereco(dados) : {})


    this.form.get('endereco.estado').valueChanges
        .pipe(
          map(estado => this.estados.filter(e => e.sigla == estado)),
          map(estados => estados && estados.length > 0 ? estados[0].id : EMPTY),
          switchMap(idEstado => this.dropdownService.getCidades(+idEstado))
        )
        .subscribe(dados => this.cidades = dados);

    // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
  }

  buildFrameworks() {

    const values = this.frameworksList.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinheckbox()) as FormArray;

    /*
    this.formBuilder.array([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ]);
    */
  }

  get frameworks() : FormArray {
    return this.form.get("frameworks") as FormArray
  }

  submit(): void{

    let valueSubmit = Object.assign({}, this.form.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v, i) => v ? this.frameworksList[i] : null)
      .filter( v => v !== null)
    });

    console.log(valueSubmit);

      this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
        .subscribe(data => {
          console.log(data);

          this.reset();
        }, (err: any) => alert('erro')
        );
  }

  consultaCEP(): void {
    let cep = this.form.get('endereco.cep').value;

      if (cep != null && cep !== ''){
        this.cepService.consultaCEP(cep)
          .subscribe( (response) => {
            this.populaEndereco(response)
          });
      }
    // this.ressetaDadosEndereco();
    }

  ressetaDadosEndereco() {
    this.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }

  populaEndereco(endereco) {
    this.form.patchValue({
      endereco: {
        rua: endereco.logradouro,
        complemento: endereco.complemento,
        bairro: endereco.bairro,
        cidade: endereco.localidade,
        estado: endereco.uf
      }
    })

    if(endereco.cep == '23020-560'){
      this.form.get('nome').setValue('Deyvison');
    }
  }

  setarCargo(){
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.form.get('cargo').setValue(cargo);
  }

  compararCargos(obj1, obj2){
    return obj1 && obj2 ? ( obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias(){
    this.form.get('tecnologias').setValue(['java','javascript','php']);
  }

  validarEmail(formControl: FormControl){
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null))
  }

}
