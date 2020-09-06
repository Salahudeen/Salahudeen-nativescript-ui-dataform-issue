import { Directive } from '@angular/core';
import { BaseComponent } from '@dataform/core';

@Directive()
export abstract class SettingsBaseComponent extends BaseComponent {
  public text: string = 'Settings';

  constructor() {
    super();
  }
}
