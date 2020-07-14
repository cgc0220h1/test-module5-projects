import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(next => {
      console.log(next);
      this.bookList = next;
    });
  }

}
