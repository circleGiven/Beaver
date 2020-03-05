import {NgModule} from '@angular/core';
import {ItemComponent} from './item.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemComponent],
  exports: [ItemComponent]
})
export class ItemModule {}
