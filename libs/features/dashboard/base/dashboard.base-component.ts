import { Directive } from '@angular/core';
import { BaseComponent } from '@dataform/core';

@Directive()
export abstract class DashboardBaseComponent extends BaseComponent {
  public text: string = 'Dashboard';

  constructor() {
    super();
  }
}
