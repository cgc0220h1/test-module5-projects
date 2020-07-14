import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {BookListComponent} from './book-list/book-list.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
