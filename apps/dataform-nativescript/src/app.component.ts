import { Component } from '@angular/core';

// libs
import { AppBaseComponent, AppService } from '@dataform/nativescript';

@Component({
  selector: 'dataform-root',
  template: `
    <GridLayout>
      <router-outlet></router-outlet>
    </GridLayout>
  `,
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
