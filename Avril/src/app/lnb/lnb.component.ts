import { Component, OnInit } from '@angular/core';
import {LnbService} from "./lnb.service";

@Component({
  selector: 'component-lnb',
  templateUrl: './lnb.component.html',
  styleUrls: ['./lnb.component.css']
})
export class LnbComponent implements OnInit {

  status: boolean = true;

  constructor(private lnbService: LnbService) { }

  ngOnInit() {
    this.lnbService.subscribeChangeStatus().subscribe(() => {
      this._changeStatus();
    });
  }

  _changeStatus() {
    if (this.status === true) {
      this.status = false;
    } else {
      this.status = true;
    }
    // body class 변경 호출
    this.lnbService.onChangedStatus(this.status);
  }

}
