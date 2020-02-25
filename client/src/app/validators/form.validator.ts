import {FormGroup} from '@angular/forms';

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
