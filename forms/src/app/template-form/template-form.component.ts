import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }
  //user: {id: number,nome:String, email: String};
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form){
    // console.log(form);
    // console.log(JSON.stringify(form.value));
    this.http.post("https://httpbin.org/post", JSON.stringify(form.value))
    .subscribe( data => {
                    console.log(data)
                  });
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCep(cep, form: NgForm){
    cep.replace(/\D/g, '');

    if(cep != ""){
      let validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)){

        this.ressetaDadosEndereco(form);
        
        let url: string = `https://viacep.com.br/ws/${cep}/json`;
        
        this.http.get(url).subscribe( (response) => this.complementaEndereco(response, form));

      }
    }
  }

  complementaEndereco(dados, form){
    
    /*
    console.log(dados);
    console.log(dados.logradouro);
    console.log(form);

    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        cep: dados.cep,
        numero: "",
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
    
    */

    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  ressetaDadosEndereco(form){
    form.form.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua:null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }

}
