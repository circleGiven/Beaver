import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile.component';
import {ClickOutsideModule} from 'ng-click-outside';

@NgModule({
  imports: [ClickOutsideModule],
  declarations: [ProfileComponent],
  exports: [ProfileComponent]
})
export class ProfileModule {}
