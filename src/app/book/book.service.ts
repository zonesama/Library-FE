import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookApiUrl = environment.apiUrl + 'book/';

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

  addBookV2(formData: FormData) {
    return this.http.post<Book>(this.bookApiUrl + 'testUp', formData);
  }
}
