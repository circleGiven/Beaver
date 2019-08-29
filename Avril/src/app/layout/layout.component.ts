import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {LnbService} from "../lnb/lnb.service";

@Component({
  templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2,
              private lnbService: LnbService) {
  }

  ngOnInit(): void {
    this.lnbService.subscribeChangedStatus().subscribe(value => {
      this.onChangeBodyClass(value);
    });
  }

  ngOnDestroy(): void {

  }

  onChangeBodyClass(value) {
    if (value === true) {
      this.renderer.removeClass(document.body, 'collapse-menu');
    } else {
      this.renderer.addClass(document.body, 'collapse-menu');
    }
  }


}
