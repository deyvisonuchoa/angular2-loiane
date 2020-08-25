import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)


import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }*/
    /* SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: ptbrLocale
    } */
    { provide: LOCALE_ID, useValue: 'pt' } // necessário a partir do Angular v5 pt-BR nao é mais suportado
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
