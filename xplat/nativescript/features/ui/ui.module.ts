import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
} from '@nativescript/angular';

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { UISharedModule } from '@dataform/features';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { HeaderComponent, HeaderLogoComponent } from './components';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptUISideDrawerModule,
    NativeScriptUIDataFormModule,
    TNSFontIconModule,
    UISharedModule,
  ],
  declarations: [HeaderComponent, HeaderLogoComponent],
  exports: [
    NativeScriptCommonModule,
    NativeScriptUISideDrawerModule,
    NativeScriptUIDataFormModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    TNSFontIconModule,
    UISharedModule,
    HeaderComponent,
    HeaderLogoComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class UIModule {}
