import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ShowListingComponent } from './show-listing/show-listing.component';
import { RightMenuComponent } from './right-menu/right-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    ShowListingComponent,
    RightMenuComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
