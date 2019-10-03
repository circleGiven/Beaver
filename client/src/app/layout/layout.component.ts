import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {LnbService} from "../lnb/lnb.service";
import {Observable, Subscription} from "rxjs";

@Component({
  templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit, OnDestroy {

  private lnbMenuStatusSubscription: Subscription;

  constructor(private renderer: Renderer2,
              private lnbService: LnbService) {
  }

  ngOnInit(): void {
    this.lnbMenuStatusSubscription = this.lnbService.observerChangedStatus().subscribe(value => {
      this.onChangeBodyClass(value);
    });
  }

  ngOnDestroy(): void {
    this.lnbMenuStatusSubscription.unsubscribe();
  }

  onChangeBodyClass(value) {
    if (value === true) {
      this.renderer.removeClass(document.body, 'show-left');
      this.renderer.addClass(document.body, 'collapse-menu');

    } else {
      this.renderer.addClass(document.body, 'show-left');
      this.renderer.removeClass(document.body, 'collapse-menu');
    }
  }


}
