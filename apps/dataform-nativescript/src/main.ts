import { platformNativeScriptDynamic } from '@nativescript/angular';
import { enableProdMode } from '@angular/core';
import { environment } from '@dataform/core';
import { AppModule } from './app.module';

if (environment.production) {
  enableProdMode();
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
