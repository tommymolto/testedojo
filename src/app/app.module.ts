import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { ApiServiceService } from './api-service.service';


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
    providers: [ ApiServiceService],

  bootstrap: [AppComponent]
})
export class AppModule { }
