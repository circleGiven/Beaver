import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {GnbComponent} from '../gnb/gnb.component';
import {LnbComponent} from '../lnb/lnb.component';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../interceptors/auth.interceptor';
import {MarkdownModule} from 'ngx-markdown';
import {LayoutGnbComponent} from '../component/layout-gnb.component';
import {FooterComponent} from '../footer/footer.component';
import {UserListComponent} from '../user/user-list.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [
    GnbComponent,
    LnbComponent,
    FooterComponent,
    LayoutComponent,
    UserListComponent,
    LayoutGnbComponent,
  ],
  providers: []
})
export class LayoutModule {

}
