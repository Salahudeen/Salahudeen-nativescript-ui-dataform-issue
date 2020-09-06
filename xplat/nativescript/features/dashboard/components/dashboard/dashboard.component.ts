import { Component, OnInit } from '@angular/core';

import { DashboardBaseComponent } from '@dataform/features';
import { backIcon, moreIcon } from '@dataform/nativescript/utils';

@Component({
  moduleId: module.id,
  selector: 'dataform-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends DashboardBaseComponent
  implements OnInit {
  backIcon: string;
  moreIcon: string;
  constructor() {
    super();
  }

  ngOnInit() {
    if (!this.backIcon) {
      this.backIcon = backIcon();
    }
    this.moreIcon = moreIcon();
  }
}
