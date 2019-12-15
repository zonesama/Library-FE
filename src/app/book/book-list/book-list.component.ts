import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';
import {DataTransferService} from '../../data-transfer.service';
import {CategoryService} from '../../category/category.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList: Book[];

  constructor(private bookService: BookService,
              private router: Router,
              private dataTransferService: DataTransferService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.refreshBookList();
  }

  refreshBookList() {
    this.bookService.getBookList().subscribe(data => {
      this.bookList = data;
    });
  }

  goToEditBook(item: Book) {
    this.dataTransferService.setData(item);
    this.router.navigateByUrl('/book/updateBook');
  }

  deleteBook(item: Book) {
    if (confirm('Are You Sure?')) {
      this.bookService.deleteBook(item.id).subscribe(result => {
        alert('Deleted Book: ' + result.id + ', name: ' + result.name);
        this.refreshBookList();
      });
    }
  }
}
