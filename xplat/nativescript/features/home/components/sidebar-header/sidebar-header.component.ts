import { Component } from '@angular/core';

import { BaseComponent } from '@dataform/core';
import { AppService, DrawerService } from '@dataform/nativescript/core';

@Component({
  moduleId: module.id,
  selector: 'dataform-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
})
export class SidebarHeaderComponent extends BaseComponent {
  public logo: string;

  constructor(
    public appService: AppService,
    public drawerService: DrawerService
  ) {
    super();
    this.logo = '~/assets/images/logo.png';
  }

  public login() {
    this.drawerService.toggle(false); // close drawer
  }
}
