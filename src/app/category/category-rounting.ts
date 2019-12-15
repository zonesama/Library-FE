import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CategoryListComponent} from './category-list/category-list.component';
import {NewCategoryComponent} from './new-category/new-category.component';
import {CategoryUpdateComponent} from './category-update/category-update.component';


const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },
  {
    path: 'newCategory',
    component: NewCategoryComponent
  },
  {
    path: 'updateCategory',
    component: CategoryUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoryRountingModule {
}
