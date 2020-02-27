import {FormControl} from '@angular/forms';
import {map, switchMap} from 'rxjs/operators';
import {timer} from 'rxjs';
import {UserService} from '../services/user.service';
import {AjaxResponse} from '../interfaces/ajax-response';


export const duplicatedUserValidator = (userService: UserService) => {
  return (control: FormControl) => {
    return timer(500).pipe(
      switchMap(() => userService.isDuplicatedEmail(control.value)),
      map((res: AjaxResponse<{duplicated: boolean}>) => {
        const isDuplicated: boolean = res.result.duplicated;
        return isDuplicated ? {duplicated: true} : null;
      })
    );
  };
};

