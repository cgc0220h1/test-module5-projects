import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/books';

  constructor(private httpClient: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.API_URL}`);
  }

  getById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.API_URL}/${id}`);
  }

  addOneBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${this.API_URL}`, book);
  }

  updateOneBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.API_URL}/${book.id}`, book);
  }

  deleteOneBook(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
}
