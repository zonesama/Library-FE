import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {NgModule} from '@angular/core';
import {NewBookComponent} from './new-book/new-book.component';
import {UpdateBookComponent} from './update-book/update-book.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'newBook',
    component: NewBookComponent
  },
  {
    path: 'updateBook',
    component: UpdateBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRouting {
}
