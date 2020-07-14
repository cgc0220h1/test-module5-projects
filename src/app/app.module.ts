import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {BookListComponent} from './book-list/book-list.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BookFormComponent} from './book-form/book-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {BookDeleteComponent} from './book-delete/book-delete.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'books/:id',
    component: BookComponent
  },
  {
    path: 'create',
    component: BookFormComponent
  },
  {
    path: 'books/:id/edit',
    component: BookFormComponent
  },
  {
    path: 'books/:id/delete',
    component: BookDeleteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    NavBarComponent,
    BookFormComponent,
    BookDeleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
