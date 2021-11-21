import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import { ResultsListingComponent } from './results-listing/results-listing.component';
import { ResultItemComponent } from './results-listing/result-item/result-item.component';
import { ReactiveFormsModule } from "@angular/forms";
import { InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ResultsListingComponent,
    ResultItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
