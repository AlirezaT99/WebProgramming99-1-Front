import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {AboutUsComponent} from './about-us/about-us.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashService} from './services/hash.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavMenuComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: SearchComponent, pathMatch: 'full'},
      {path: 'about-us', component: AboutUsComponent},
    ], { useHash: true}),
    BrowserAnimationsModule,
  ],
  providers: [HashService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
