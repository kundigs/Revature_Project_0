import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { TopicSearchComponent } from './topic-search/topic-search.component';
import { HomeComponent } from './home/home.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { PODComponent } from './pod/pod.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopicSearchComponent,
    HomeComponent,
    LocationSearchComponent,
    PODComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
