import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SecondaryComponent } from './secondary/secondary.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SecondaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
