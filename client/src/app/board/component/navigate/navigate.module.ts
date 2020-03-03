import {NgModule} from '@angular/core';
import {NavigateComponent} from './navigate.component';
import {CommonModule} from '@angular/common';
import {MenuModule} from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  declarations: [NavigateComponent],
  exports: [NavigateComponent]
})
export class NavigateModule {}
