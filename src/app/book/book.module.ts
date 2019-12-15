import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from './book-list/book-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BookRouting} from './book-routing';
import {CategoryService} from '../category/category.service';
import {BookService} from './book.service';
import {RouterModule} from '@angular/router';
import { NewBookComponent } from './new-book/new-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';


@NgModule({
  declarations: [BookListComponent, NewBookComponent, UpdateBookComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, BookRouting, RouterModule
  ],
  providers: [CategoryService, BookService]
})
export class BookModule {
}
