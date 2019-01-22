import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoredProcsComponent } from './stored-procs/stored-procs.component';
import { HttpClientModule } from '@angular/common/http';
import { StatusSummaryComponent } from './status-summary/status-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    StoredProcsComponent,
    StatusSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
