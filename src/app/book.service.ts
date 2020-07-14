import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./book";

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
}