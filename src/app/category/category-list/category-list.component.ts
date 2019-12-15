import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {DataTransferService} from '../../data-transfer.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  private categoryList: Category[];

  constructor(private router: Router,
              private categoryService: CategoryService,
              private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
    this.refreshCategoryList();
  }

  refreshCategoryList() {
    this.categoryService.getCategoryList().subscribe(data => {
      this.categoryList = data;
    });
  }

  deleteCategory(category: Category) {
    if (confirm('Are You Sure?')) {
      this.categoryService.deleteCategory(category.id).subscribe(result => {
        alert('Deleted ' + category.name);
        this.refreshCategoryList();
      });
    }
  }

  goToEditCategory(category: Category) {
    this.dataTransferService.setData(category);
    this.router.navigateByUrl('/category/updateCategory');
  }
}
