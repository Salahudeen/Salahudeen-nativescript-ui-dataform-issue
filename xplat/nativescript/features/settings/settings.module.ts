import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  SettingsModule as SharedSettingsModule,
  routesSettings,
} from '@dataform/features';
import { UIModule } from '../ui/ui.module';
import { SettingsComponent } from './components';
import { NativeScriptRouterModule } from '@nativescript/angular';

@NgModule({
  imports: [
    SharedSettingsModule,
    UIModule,
    NativeScriptRouterModule.forChild(routesSettings(SettingsComponent)),
  ],
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {}
