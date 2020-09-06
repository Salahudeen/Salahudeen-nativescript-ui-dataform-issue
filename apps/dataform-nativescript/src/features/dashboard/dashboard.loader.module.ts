// from workaround:
// https://github.com/angular/angular-cli/issues/6373#issuecomment-319116889

import { NgModule } from '@angular/core';
import { DashboardModule } from '@dataform/nativescript';

@NgModule({
  imports: [DashboardModule],
})
export class DashboardLoaderModule {}
