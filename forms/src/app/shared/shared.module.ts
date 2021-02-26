import { CampoControlComponent } from './campo-control/campo-control.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    FormDebugComponent,
    CampoControlComponent
  ],
  providers: [DropdownService]
})
export class SharedModule { }
