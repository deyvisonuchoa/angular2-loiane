import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Endereco } from '../shared/models/endereco';
import { Estado } from '../shared/models/estado';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  form: FormGroup;
  estados: Estado[];

  constructor(private formBuilder: FormBuilder,private http: HttpClient,private dropdownService: DropdownService) { }

  ngOnInit(): void {

    this.dropdownService.getEstados()
      .subscribe(dados => console.log(dados));

    //console.log(this.estados);

    /*this.form = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),

      endereco: new FormGroup({
        cep> new FormControl(null),
        ...
      })
    });*/
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null,[Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]]
      })
    });

    // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
  }

  onSubmit(): void{
    console.log(this.form);
    if (this.form.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
        .subscribe(data => {
          console.log(data);

          this.reset();
        }, (err: any) => alert('erro')
        );
    }else{
      this.verificaValidacoesFormulario(this.form);
    }
  }

  verificaValidacoesFormulario(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach( campo => {
       console.log(campo);
       const controle = formGroup.get(campo);
       controle.markAsDirty();
       if (controle instanceof FormGroup){
        this.verificaValidacoesFormulario(controle);
      }
    })
  }

  reset(): void{
    this.form.reset();
  }

  verificaValidTouched(campo: string): boolean{
    return !this.form.get(campo).valid && (this.form.get(campo).touched || this.form.get(campo).dirty);
  }

  verificaEmailInvalido(): boolean{
    const campoEmail = this.form.get('email');
    if (campoEmail.errors){
      return !campoEmail.errors['email'] && campoEmail.touched;
    }
  }



  aplicaCssErro(campo: string): any{
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  consultaCEP(): void {
    let cep = this.form.get('endereco.cep').value;

      cep.replace(/\D/g, '');

      if(cep != ""){
        let validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)){

          this.ressetaDadosEndereco();

          let url: string = `https://viacep.com.br/ws/${cep}/json`;

          this.http.get(url).subscribe( (response) => {
            console.log(response)
            this.populaEndereco(response)
          });

        }
      }
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

}
