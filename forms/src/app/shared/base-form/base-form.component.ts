import { Component, OnInit, Directive } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Directive()
export abstract class BaseFormComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  abstract submit();

  onSubmit() {
    if (this.form.valid) {
      this.submit();
    } else {
      console.log('form invalido');
      this.verificaValidacoesFormulario(this.form);
    }
  }

  verificaValidacoesFormulario(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesFormulario(controle);
      }
    });
  }

  reset() {
    this.form.reset();
  }

  verificaValidTouched(campo: string) {
    return (
      !this.form.get(campo).valid &&
      (this.form.get(campo).touched || this.form.get(campo).dirty)
    );
  }

  verificaRequeired(campo: string): boolean{
    return !this.form.get(campo).hasError('required') &&
    (this.form.get(campo).touched || this.form.get(campo).dirty);
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


}
