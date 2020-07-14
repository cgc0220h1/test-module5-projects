import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Book} from '../book';
import {ActivatedRoute} from '@angular/router';

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
  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };
  message: string;
  isCreate = false;
  buttonLabel: string;

  constructor(private bookService: BookService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.bookTitle = new FormControl(this.book.title);
    this.bookAuthor = new FormControl(this.book.author);
    this.bookDescription = new FormControl(this.book.description);
    this.bookForm = this.formBuilder.group({
      title: this.bookTitle,
      author: this.bookAuthor,
      description: this.bookDescription
    });

    const id = this.activatedRoute.snapshot.params.id;
    this.bookService.getById(id).subscribe(book => {
      this.book.id = id;
      this.book = book;
      this.buttonLabel = 'Sửa sách';
    }, () => {
      this.buttonLabel = 'Thêm sách';
      this.isCreate = true;
    }, () => {
      this.bookTitle.patchValue(this.book.title);
      this.bookAuthor.patchValue(this.book.author);
      this.bookDescription.patchValue(this.book.description);
    });
  }


  onSubmit(): void {
    const bookSubmit: Book = {
      ...this.book,
      title: this.bookForm.get('title').value,
      author: this.bookForm.get('author').value,
      description: this.bookForm.get('description').value
    };
    if (this.isCreate) {
      this.bookService.addOneBook(bookSubmit).subscribe(next => {
        this.message = 'Thêm sách thành công';
        console.log(next);
      });
    } else {
      this.bookService.updateOneBook(bookSubmit).subscribe(next => {
        this.message = 'Sửa sách thành công';
        console.log(next);
      });
    }
  }
}
