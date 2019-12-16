import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CategoryService} from '../../category/category.service';
import {Category} from '../../category/category';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  bookForm: FormGroup;
  categories: Category[];
  currentImg: string;

  constructor(private categoryService: CategoryService,
              private bookService: BookService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.refresherCategory();
    this.bookForm = this.fb.group({
      name: [''],
      author: [''],
      price: [''],
      description: [''],
      image: [''],
      category: ['']
    });
  }

  refresherCategory() {
    this.categoryService.getCategoryList().subscribe(data => {
      this.categories = data;
    });
  }

  onSubmit() {
    this.bookService.addBook(this.bookForm.value).subscribe(result => {
      alert('Added Book: ' + result.name);
      this.router.navigateByUrl('/book');
    });
    // const formData = new FormData();
    // formData.append('book', JSON.stringify(this.bookForm.value));
    // this.bookService.addBookV2(formData).subscribe(result => {
    //   alert('Added Book: ' + result.name);
    //   this.router.navigateByUrl('/book');
    // });
  }

  onChangeImg(event) {
    this.currentImg = event.target.value;
  }

  deleteBook(id: number) {

  }
}
