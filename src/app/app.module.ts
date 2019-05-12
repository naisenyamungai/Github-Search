import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { DataService } from './data.service';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import { BackgroundDirective } from './background.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    SearchComponent,
    AboutComponent,
    DateCountPipe,
    HighlightDirective,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,
    FormsModule,
   
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
