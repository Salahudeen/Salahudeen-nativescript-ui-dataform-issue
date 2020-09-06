import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeModule as SharedHomeModule } from '@dataform/features';
import { UIModule } from '../ui/ui.module';
import { HOME_COMPONENTS } from './components';

@NgModule({
  imports: [SharedHomeModule, UIModule],
  declarations: [...HOME_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
