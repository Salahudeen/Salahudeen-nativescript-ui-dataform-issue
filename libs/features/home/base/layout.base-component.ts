import { Directive, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

import { BaseComponent } from '@dataform/core';

@Directive()
export abstract class LayoutBaseComponent extends BaseComponent
  implements AfterViewChecked {
  public appName: string;

  constructor(protected cdRef: ChangeDetectorRef) {
    super();
  }

  ngAfterViewChecked() {
    // helps solves ExpressionChangedAfterItHasBeenCheckedError exception with angular
    this.cdRef.detectChanges();
  }
}
