import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookApiUrl = 'http://localhost:8080/api/book/';

  constructor(private http: HttpClient) {
  }

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookApiUrl);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.bookApiUrl + 'newBook', book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(this.bookApiUrl + id + '/deleteBook');
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(this.bookApiUrl + 'updateBook', book);
  }
}
