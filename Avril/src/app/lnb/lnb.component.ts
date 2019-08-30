import { Component, OnInit } from '@angular/core';
import {LnbService} from "./lnb.service";

@Component({
  selector: 'component-lnb',
  templateUrl: './lnb.component.html',
  styleUrls: ['./lnb.component.css']
})
export class LnbComponent implements OnInit {

  status;

  constructor(private lnbService: LnbService) { }

  ngOnInit() {
    // initial
    this.changeStatus();
    // subscribe
    this.lnbService.observerChangeStatus().subscribe(() => {
      this.changeStatus();
    });
  }

  private changeStatus() {
    if (this.status === true) {
      this.status = false;
    } else {
      this.status = true;
    }
    // body class 변경 호출
    this.lnbService.notificationChangedStatus(this.status);
  }

}
