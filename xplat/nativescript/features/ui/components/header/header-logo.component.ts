import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// libs
import { RouterExtensions } from '@nativescript/angular';

// app
import { HeaderBaseComponent } from '@dataform/features';
import { AppService, DrawerService } from '@dataform/nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'dataform-header-logo',
  templateUrl: 'header-logo.component.html',
})
export class HeaderLogoComponent extends HeaderBaseComponent {
  @Input() logo: string;

  constructor(
    // private store: Store<IAppState>,
    private router: RouterExtensions,
    private drawer: DrawerService,
    public appService: AppService
  ) {
    super();
  }

  public toggleDrawer() {
    this.drawer.toggle();
  }
}
