import {NgModule} from '@angular/core';
import {InputFormComponent} from './input-form.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    InputFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputFormComponent
  ]
})
export class FormModule {}
