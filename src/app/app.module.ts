import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import {TvModule} from './tv/tv.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
