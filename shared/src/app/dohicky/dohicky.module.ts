import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DohickyComponent } from './dohicky.component';

@NgModule({
  imports: [FlexLayoutModule],
  exports: [DohickyComponent],
  declarations: [DohickyComponent],
  providers: [],
})
export class DohickyModule {
}
