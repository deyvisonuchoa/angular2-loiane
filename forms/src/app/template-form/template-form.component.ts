import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
    console.log(form);
    //console.log(form.value.nome);
    console.log(this.usuario)
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

  consultaCep(cep){
    cep.replace(/\D/g, '');

    if(cep != ""){
      let validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)){
        
        let url: string = `https://viacep.com.br/ws/${cep}/json`;
        
        this.http.get(url).subscribe( (response) => {
          console.log(response);
        })

      }
    }
  }

}
