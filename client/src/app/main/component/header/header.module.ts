import {NgModule} from '@angular/core';
import {AlertModule} from '../alert/alert.module';
import {HeaderComponent} from './header.component';
import {LogoModule} from '../../../common/logo/logo.module';
import {ProfileModule} from '../profile/profile.module';

@NgModule({
  imports: [AlertModule, LogoModule, ProfileModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
