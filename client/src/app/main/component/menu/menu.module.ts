import {NgModule} from '@angular/core';
import {MenuComponent} from './menu.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule {}
