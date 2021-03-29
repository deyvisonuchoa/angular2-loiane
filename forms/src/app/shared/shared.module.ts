import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampoControlComponent } from './campo-control/campo-control.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { BaseFormComponent } from './base-form/base-form.component';



@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormDebugComponent,
    CampoControlComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ],
  providers: [DropdownService]
})
export class SharedModule { }
