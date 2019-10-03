import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {GnbComponent} from '../gnb/gnb.component';
import {LnbComponent} from '../lnb/lnb.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    GnbComponent,
    LnbComponent
  ]
})
export class LayoutModule {

}
