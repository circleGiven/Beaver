import {Component, HostBinding, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Router, Scroll} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'header[component-header]',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | private Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  @HostBinding('class.page-header')
  private readonly class = true;
  @HostBinding('style.background-color')
  private readonly style = '#0f619f';

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Protected Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  pageType: 'login' | 'register' | 'default';
  isLogged: boolean;

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Constructor
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  constructor(private readonly renderer: Renderer2,
              private readonly router: Router) {
    router.events.pipe(filter(e => e instanceof Scroll)).subscribe((val: Scroll) => {
      const urlAfterRedirects: string = val.routerEvent.urlAfterRedirects;
      // Authentication에 접근했는지 여부
      if (urlAfterRedirects.startsWith('/auth') === true) {
        const splicedUrl: string = urlAfterRedirects.replace('/auth', '');
        // check URL
        if (splicedUrl.startsWith('/login') === true) {
          this.pageType = 'login';
        } else if (splicedUrl.startsWith('/register') === true) {
          this.pageType = 'register';
        }
      } else {
        this.pageType = 'default';
      }
    });
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Implement Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  ngOnInit(): void {
    this.setHeaderOptions();
  }

  ngOnDestroy(): void {
    this.removeHeaderOptions();
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Override Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  goToLogin(): void {
    this.router.navigateByUrl('/auth/login');
  }

  goToRegister(): void {
    this.router.navigateByUrl('/auth/register');
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Private Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  private setHeaderOptions(): void {
    // fix side bar
    this.renderer.addClass(document.body, 'header-function-fixed');
  }

  private removeHeaderOptions(): void {
    // remove fixed side bar
    this.renderer.removeClass(document.body, 'header-function-fixed');
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Inner Class
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
}
