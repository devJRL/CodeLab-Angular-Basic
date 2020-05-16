import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';


@NgModule({
  // LIBRARY FOR RENDERING
  imports: [
    BrowserModule,
    FormsModule
  ],
  // COMPONENTS FOR RENDERING
  declarations: [
    AppComponent
  ],
  providers: [],
  // RENDERING FROM IGINITION COMPONENT
  bootstrap: [AppComponent]
})
export class AppModule { }