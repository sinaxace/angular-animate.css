import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerCardComponent } from './hammer-card/hammer-card.component';
import { MatCard, MatCardContent, MatCardActions, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HammerCardComponent,
    MatCard,
    MatCardContent,
    MatCardActions
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
