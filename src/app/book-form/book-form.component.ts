import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  bookTitle: FormControl;
  bookAuthor: FormControl;
  bookDescription: FormControl;
  book: Book = {};
  message: string;

  constructor(private bookService: BookService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.bookTitle = new FormControl('');
    this.bookAuthor = new FormControl('');
    this.bookDescription = new FormControl('');
    this.bookForm = this.formBuilder.group({
      title: this.bookTitle,
      author: this.bookAuthor,
      description: this.bookDescription
    });
  }

  onSubmit(): void {
    this.book = {
      title: this.bookForm.get('title').value,
      author: this.bookForm.get('author').value,
      description: this.bookForm.get('description').value
    };
    this.bookService.addOneBook(this.book).subscribe(next => {
      this.message = 'Thêm sách thành công';
      console.log(next);
    });
  }

}
