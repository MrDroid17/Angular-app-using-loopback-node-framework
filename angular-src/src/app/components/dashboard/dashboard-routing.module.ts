import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guard/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard], children: [
      { path: '', component: CategoryComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/add', component: AddCategoryComponent },
      { path: 'category/details', component: DetailCategoryComponent },
      { path: 'category/edit/:category_id', component: AddCategoryComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
