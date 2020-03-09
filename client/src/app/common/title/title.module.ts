import {NgModule} from '@angular/core';
import {TitleComponent} from './title.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent],
  exports: [TitleComponent]
})
export class TitleModule {}
