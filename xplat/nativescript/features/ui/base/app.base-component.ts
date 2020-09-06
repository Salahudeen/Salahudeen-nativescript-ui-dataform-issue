import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@dataform/core';
import { AppService } from '@dataform/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
