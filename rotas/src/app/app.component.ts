import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas';

  exibeMenu:boolean = false;

  constructor(private authService: AuthService){

  }

  ngOnInit() {
    this.authService.exibeMenu.subscribe( mostrar => {
      this.exibeMenu = mostrar;
    })
  }

}
