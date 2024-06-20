import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';

@NgModule({
  //All the components and pipes
  declarations: [AppComponent, HeaderComponent],
  //All Modules
  imports: [BrowserModule],
  //All Services
  providers: [],
  //Only and only main component
  bootstrap: [AppComponent],
})
export class AppModule {}
