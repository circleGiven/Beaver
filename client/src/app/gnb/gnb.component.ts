import {Component} from '@angular/core';
import {LnbService} from "../lnb/lnb.service";

@Component({
  selector: 'component-gnb',
  templateUrl: 'gnb.component.html'
})
export class GnbComponent {

  constructor(private lnbService: LnbService) {

  }

  onClickMenuHamburg(): void {
    this.lnbService.notificationChangeStatus();
  }
}
