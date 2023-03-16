import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './common/loader/loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CitiesTableComponent } from './cities-table/cities-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CityInfoComponent } from './cities-table/components/city-info/city-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    CitiesTableComponent,
    PageNotFoundComponent,
    CityInfoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
