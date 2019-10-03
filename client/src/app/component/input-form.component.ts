import {Component, Input} from '@angular/core';

@Component({
  selector: 'component-form-input',
  templateUrl: 'input-form.component.html'
})
export class InputFormComponent {

  @Input() readonly type;
  @Input() readonly name: string;
  @Input() readonly placeHolder: string;
  @Input() readonly inputClass: string;

}
