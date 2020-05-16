import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

// DECORATE WITH "NgModule"
@NgModule({
  // LIBRARY FOR Module
  imports: [
    BrowserModule,
    FormsModule
  ],
  // COMPONENTS IN Module
  // `ng generate component {component-name}`
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  //  
  providers: [],
  // IGINITION COMPONENT
  bootstrap: [AppComponent]
})
export class AppModule {
  // DECORATE WITH EMPTY "AppModule class"!!
}