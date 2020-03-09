import {Component, ElementRef, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'div[component-profile]',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | private Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  @HostListener('document:click', ['$event'])
  private clickout(event) {
    if (this.isProfileVisible === true && this.elementRef.nativeElement.contains(event.target) === false) {
      this.closeProfile();
    }
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Protected Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  isProfileVisible: boolean;

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Constructor
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  constructor(private readonly elementRef: ElementRef,
              private readonly router: Router,
              private readonly toastr: ToastrService,
              private readonly spinner: NgxSpinnerService,
              private readonly userService: UserService) {
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Implement Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Override Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  changeProfileVisible(): void {
    if (this.isProfileVisible === true) {
      this.closeProfile();
    } else {
      this.showProfile();
    }
  }

  goToProfileSettings(): void {
    this.closeProfile();
    this.router.navigateByUrl('/my');
  }

  logOut(): void {
    // loading hide
    // this.spinner.show();
    this.closeProfile();
    this.userService.logOut().subscribe(() => {
      this.closeProfile();
      // loading hide
      this.spinner.hide();
      // alert
      this.toastr.success('로그아웃 되었습니다.');
    }, (error) => {
      // loading hide
      this.spinner.hide();
      // alert
      this.toastr.success('로그아웃을 실패하였습니다.');
    });
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Private Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  private showProfile(): void {
    this.isProfileVisible = true;
    this.elementRef.nativeElement.classList.add('show');
  }

  private closeProfile(): void {
    this.isProfileVisible = false;
    this.elementRef.nativeElement.classList.remove('show');
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Inner Class
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
}
