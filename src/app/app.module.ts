import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailsComponent } from './components/details/details.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsComponent,
    WatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
