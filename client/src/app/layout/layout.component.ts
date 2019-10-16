import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {LnbService} from "../lnb/lnb.service";
import {Observable, Subscription} from "rxjs";
import {UserService} from '../service/user.service';
import {ResponseInterface} from '../interfaces/response.interface';

@Component({
  templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit, OnDestroy {

  private lnbMenuStatusSubscription: Subscription;

  userList;

  constructor(private renderer: Renderer2,
              private readonly userService: UserService,
              private lnbService: LnbService) {
  }

  ngOnInit(): void {
    this.lnbMenuStatusSubscription = this.lnbService.observerChangedStatus().subscribe(value => {
      this.onChangeBodyClass(value);
    });
    // TODO test code
    this.userList = this.userService.list();
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
