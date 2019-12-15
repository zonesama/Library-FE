import {Component, OnInit} from '@angular/core';
import {Category} from '../../category/category';
import {Book} from '../book';
import {Router} from '@angular/router';
import {DataTransferService} from '../../data-transfer.service';
import {CategoryService} from '../../category/category.service';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  currentImg: string;
  categories: Category[];
  book: Book;
  bookForm: FormGroup;

  constructor(private router: Router,
              private dataTransferService: DataTransferService,
              private categoryService: CategoryService,
              private bookService: BookService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.book = this.dataTransferService.getData();
    this.currentImg = this.book.image;
    this.refreshCategoryList();
    this.bookForm = this.fb.group({
      id: [this.book.id],
      name: [this.book.name],
      author: [this.book.author],
      price: [this.book.price],
      description: [this.book.description],
      image: [this.book.image],
      category: [this.book.category.id]
    });
  }

  onChangeImg(event) {
    this.currentImg = event.target.value;
  }

  refreshCategoryList() {
    this.categoryService.getCategoryList().subscribe(data => {
      this.categories = data;
    });
  }

  onSubmit() {
    this.bookService.updateBook(this.bookForm.value).subscribe(result => {
      alert('Updated Book with ID: ' + result.id);
      this.router.navigateByUrl('/book');
    });
  }
}
