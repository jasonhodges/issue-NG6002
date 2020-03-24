import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DohickyModule } from '@root_shared/dohicky/dohicky.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DohickyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
