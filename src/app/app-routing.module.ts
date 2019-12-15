import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';



const routes: Routes = [
  {
    path: 'category',
    loadChildren: './category/category.module#CategoryModule'
  },
  {
    path: 'book',
    loadChildren: './book/book.module#BookModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRountingModule {
}
