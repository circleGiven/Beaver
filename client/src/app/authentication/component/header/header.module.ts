import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {LogoModule} from '../../../common/logo/logo.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [LogoModule, CommonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
