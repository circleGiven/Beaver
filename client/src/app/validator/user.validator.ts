import {UserService} from '../sign/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

export const duplicatedUserValidator = (userService: UserService) => {
  return (control: FormControl) => {
    return timer(500).pipe(
      switchMap(() => userService.isDuplicatedEmail(control.value)),
      map(res => {
        const isDuplicated: boolean = res['result'].duplicated;
        return isDuplicated ? {duplicated: true} : null;
      })
    );
  };
};

export const mustMatch = (controlName: string, targetControlName: string) => {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const targetControl = formGroup.controls[targetControlName];

    if (targetControl.errors && !targetControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== targetControl.value) {
      targetControl.setErrors({ mustMatch: true });
    } else {
      targetControl.setErrors(null);
    }
  };
};
