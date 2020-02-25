import {FormControl} from '@angular/forms';
import {map, switchMap} from 'rxjs/operators';
import {timer} from 'rxjs';
import {UserService} from '../services/user.service';
import {ResponseInterface} from '../interfaces/Response.interface';

export const duplicatedUserValidator = (userService: UserService) => {
  return (control: FormControl) => {
    return timer(500).pipe(
      switchMap(() => userService.isDuplicatedEmail(control.value)),
      map((res: ResponseInterface) => {
        const isDuplicated: boolean = res.result.duplicated;
        return isDuplicated ? {duplicated: true} : null;
      })
    );
  };
};

