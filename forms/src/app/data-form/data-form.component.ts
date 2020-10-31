import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    /*this.form = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/
    this.form = this.formBuilder.group({
      nome: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]]
    });

    // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
  }

  onSubmit(){
    // console.log(this.form.value);
    this.http.post("https://httpbin.org/post", JSON.stringify(this.form.value))
    .subscribe( data => {
      console.log(data);

      this.form.reset();
    },(err: any) => alert('erro')
    );
  }

  reset(){
    this.form.reset();
  }

}
