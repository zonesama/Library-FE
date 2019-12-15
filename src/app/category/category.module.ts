import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryListComponent} from './category-list/category-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CategoryService} from './category.service';
import {CategoryRountingModule} from './category-rounting';
import { NewCategoryComponent } from './new-category/new-category.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';


@NgModule({
  declarations: [CategoryListComponent, NewCategoryComponent, CategoryUpdateComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule, CategoryRountingModule
  ],
  providers: [CategoryService]
})
export class CategoryModule {
}
