import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  DashboardModule as SharedDashboardModule,
  routeDashboard,
} from '@dataform/features';
import { UIModule } from '../ui/ui.module';
import { DashboardComponent, DASHBOARD_COMPONENTS } from './components';
import { NativeScriptRouterModule } from '@nativescript/angular';

@NgModule({
  imports: [
    SharedDashboardModule,
    UIModule,
    NativeScriptRouterModule.forChild(routeDashboard(DashboardComponent)),
  ],
  declarations: [...DASHBOARD_COMPONENTS],
  exports: [...DASHBOARD_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DashboardModule {}
