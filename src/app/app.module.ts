import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRountingModule} from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VerticalBarComponent } from './vertical-bar/vertical-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VerticalBarComponent
  ],
  imports: [
    BrowserModule, RouterModule, AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
