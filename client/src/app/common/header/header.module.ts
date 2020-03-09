import {NgModule} from '@angular/core';
import {AlertModule} from '../alert/alert.module';
import {HeaderComponent} from './header.component';
import {LogoModule} from '../logo/logo.module';
import {ProfileModule} from '../profile/profile.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [AlertModule, LogoModule, ProfileModule, CommonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
