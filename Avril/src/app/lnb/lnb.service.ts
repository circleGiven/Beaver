import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject, Subscription} from "rxjs";

@Injectable({providedIn: 'root'})
export class LnbService {

  subjectOnChangeStatus$ = new Subject();
  subjectChangedStatus$ = new Subject();

  constructor() {
  }

  onChangeStatus() {
    this.subjectOnChangeStatus$.next();
  }

  onChangedStatus(value: boolean) {
    this.subjectChangedStatus$.next(value);
  }

  subscribeChangeStatus() {
    return this.subjectOnChangeStatus$.asObservable();
  }

  subscribeChangedStatus() {
    return this.subjectChangedStatus$.asObservable();
  }
}
