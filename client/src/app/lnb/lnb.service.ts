import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LnbService {

  // observables
  private changeStatusObservable$ = new Subject();
  private changedStatusObservable$ = new Subject();

  constructor() {
  }

  notificationChangeStatus() {
    this.changeStatusObservable$.next();
  }

  notificationChangedStatus(value: boolean) {
    this.changedStatusObservable$.next(value);
  }

  observerChangeStatus() {
    return this.changeStatusObservable$.asObservable();
  }

  observerChangedStatus() {
    return this.changedStatusObservable$.asObservable();
  }
}
