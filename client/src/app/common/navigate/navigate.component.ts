import {Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Menu} from '../../domains/menu';

@Component({
  selector: 'aside[component-navigate]',
  templateUrl: './navigate.component.html',
})
export class NavigateComponent implements OnInit, OnDestroy {

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | private Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  @HostBinding('class.page-sidebar')
  private readonly class = true;

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Protected Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  // TODO: 추후 API로 대체
  menuList: Menu[];

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Constructor
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  constructor(private readonly elementRef: ElementRef,
              private readonly renderer: Renderer2) {
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Implement Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  ngOnInit(): void {
    this.setNavigateOptions();
    this.setMenuList();
  }

  ngOnDestroy(): void {
    this.removeNavigateOptions();
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Override Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/



  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Private Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  private setNavigateOptions(): void {
    // set top position
    this.renderer.addClass(document.body, 'nav-function-top');
    // fixed position
    this.renderer.addClass(document.body, 'nav-function-fixed');
  }

  private removeNavigateOptions(): void {
    // remove top position
    this.renderer.removeClass(document.body, 'nav-function-top');
    // remove position
    this.renderer.removeClass(document.body, 'nav-function-fixed');
  }

  private setMenuList(): void {
    this.menuList = [
      new Menu('Database', '/database', 'fal fa-database', [
        new Menu('도크', '/database/dockyard'),
        new Menu('장비', '/database/equipment'),
        new Menu('이벤트', '/database/event'),
      ]),
      new Menu('커뮤니티', '/community', 'fal fa-database', [
        new Menu('자유게시판', '/community/free'),
        new Menu('토론', '/community/discuss'),
      ]),
    ];
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Inner Class
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
}
