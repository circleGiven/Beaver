import {Component, ElementRef, HostBinding, Input, OnChanges} from '@angular/core';
import {AzurLane} from '../../interfaces/azur-lane';

@Component({
  selector: 'span[component-tier]',
  templateUrl: './tier.component.html'
})
export class TierComponent implements OnChanges {

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | private Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Protected Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  @HostBinding('class.badge')
  readonly class1: boolean = true;

  @Input()
  readonly tier: AzurLane.Tier;

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Constructor
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  constructor(private readonly elementRef: ElementRef) {
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Implement Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (changes.tier.currentValue) {
      this.setTierClass();
    }
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Override Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Private Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  private setTierClass(): void {
    if (this.tier === AzurLane.Tier.SSR) {
      this.setClasses(TierClass.SSR);
    } else if (this.tier === AzurLane.Tier.SR) {
      this.setClasses(TierClass.SR);
    } else if (this.tier === AzurLane.Tier.R) {
      this.setClasses(TierClass.R);
    } else if (this.tier === AzurLane.Tier.N) {
      this.setClasses(TierClass.N);
    }
  }

  private setClasses(className: string): void {
    const classList = className.split(' ');
    classList.forEach((value) => {
     this.addClassToWrapper(value);
    });
  }

  private addClassToWrapper(className: string): void {
    this.elementRef.nativeElement.classList.add(className);
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Inner Class
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
}

enum TierClass {
  SSR = 'badge-warning text-white',
  SR = 'badge-info',
  R = 'badge-primary',
  N = 'badge-secondary',
}
