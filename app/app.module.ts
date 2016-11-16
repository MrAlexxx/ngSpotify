import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { router, appRouterProviders } from './app.routes';
// import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbat.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports:      [ BrowserModule, router, FormsModule, HttpModule ],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ appRouterProviders ]
})
export class AppModule { }
