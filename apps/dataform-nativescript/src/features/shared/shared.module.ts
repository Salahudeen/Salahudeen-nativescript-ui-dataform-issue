import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@dataform/nativescript';

@NgModule({
  imports: [UIModule],
  exports: [UIModule]
})
export class SharedModule {}
