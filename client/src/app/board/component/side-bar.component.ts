import {Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'aside[component-sidebar]',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit, OnDestroy {

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | private Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  @HostBinding('class.page-sidebar')
  private readonly class = true;

  private sidebarVisible$: Subscription;

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Protected Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/


  readonly LOGO_IMAGE_PATH: string = '../../assets/img/beaver.png';

  // TODO: 추후 API로 대체
  menuList;
  isShowSidebar: boolean = true;
  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Constructor
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  constructor(private readonly elementRef: ElementRef,
              private readonly renderer: Renderer2,
              private readonly sidebarService: SidebarService) {
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Implement Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  ngOnInit(): void {
    this.setSideBarOption();
    this.setMenuList();
    this.sidebarVisible$ = this.sidebarService.getSidebarVisible().subscribe(() => this.changeSidebarVisible());
  }

  ngOnDestroy(): void {
    this.sidebarVisible$.unsubscribe();
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Override Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  changeSidebarVisible(): void {
    if (this.isShowSidebar === true) {
      this.hideSideBar();
    } else {
      this.showSideBar();
    }
  }

  showSideBar(): void {
    this.isShowSidebar = true;
    this.renderer.removeClass(document.body, 'nav-function-hidden');
    this.renderer.addClass(document.body, 'mobile-nav-on');
  }

  hideSideBar(): void {
    this.isShowSidebar = false;
    this.renderer.addClass(document.body, 'nav-function-hidden');
    this.renderer.removeClass(document.body, 'mobile-nav-on');
  }

  clickOutsideSideBar(): void {
    if (this.isShowSidebar === true) {
      this.hideSideBar();
    }
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Private Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  private setSideBarOption(): void {
    // fix side bar
    this.renderer.addClass(document.body, 'nav-function-fixed');
  }

  private setMenuList(): void {
    this.menuList = [
      {label: 'DB', value: 'DB'},
      {label: '자유게시판', value: 'board'},
    ];
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Inner Class
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
}
