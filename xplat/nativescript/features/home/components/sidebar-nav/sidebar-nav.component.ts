import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { ModalDialogOptions } from '@nativescript/angular';

import {
  WindowService,
} from '@dataform/core';
import { DrawerService } from '@dataform/nativescript/core';
import { SidebarNavBaseComponent } from '@dataform/features';

@Component({
  moduleId: module.id,
  selector: 'dataform-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
})
export class SidebarNavComponent extends SidebarNavBaseComponent {
  constructor(
    protected router: Router,
    private routerExtensions: RouterExtensions,
    private _drawerService: DrawerService,
    private _windowsService: WindowService,
  ) {
    super(router);
  }

  public changeNav(route) {
    let routePath = '/';
    if (route && route.length) {
      routePath = '/' + route.slice(1).join('/');
    }
    if (this.activeUrl !== routePath) {
      // this._windowsService.setTimeout((_) => {
        this.routerExtensions.navigate(route);
      // }, 50);
    } else {
      this._drawerService.toggle(false);
    }
  }
}
