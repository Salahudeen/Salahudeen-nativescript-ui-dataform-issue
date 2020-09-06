// angular
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// nativescript
import { NativeScriptRouterModule } from '@nativescript/angular';

// app
import { SharedModule } from './features/shared/shared.module';
import { environment } from '@dataform/core';
import { LayoutComponent } from '@dataform/nativescript';

const routes: Routes = [
  {
    path: environment.baseRoutePath,
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('~/features/dashboard/dashboard.loader.module').then(
            (m) => m.DashboardLoaderModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('~/features/settings/settings.loader.module').then(
            (m) => m.SettingsLoaderModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
