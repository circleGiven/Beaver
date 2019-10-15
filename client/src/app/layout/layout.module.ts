import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {GnbComponent} from '../gnb/gnb.component';
import {LnbComponent} from '../lnb/lnb.component';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../interceptors/auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    GnbComponent,
    LnbComponent
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
})
export class LayoutModule {

}
