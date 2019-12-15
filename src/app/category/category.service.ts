import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoryApiUrl = 'http://localhost:8080/api/category/';

  constructor(private http: HttpClient) {
  }

  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryApiUrl);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoryApiUrl + 'newCategory', category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(this.categoryApiUrl + id + '/deleteCategory');
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(this.categoryApiUrl + 'updateCategory', category);
  }
}
