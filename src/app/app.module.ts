import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ShowListingComponent } from './show-listing/show-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    ShowListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
