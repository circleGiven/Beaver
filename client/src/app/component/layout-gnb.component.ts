import {Component, Input} from '@angular/core';

@Component({
  selector: 'component-layout-gnb',
  templateUrl: 'layout-gnb.component.html'
})
export class LayoutGnbComponent {

  @Input() readonly title: string;
}
