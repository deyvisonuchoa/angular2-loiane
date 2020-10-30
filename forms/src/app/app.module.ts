import { DataFormModule } from './data-form/data-form.module';
import { TemplateFormModule } from './template-form/template-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TemplateFormModule,
    HttpClientModule,
    DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
