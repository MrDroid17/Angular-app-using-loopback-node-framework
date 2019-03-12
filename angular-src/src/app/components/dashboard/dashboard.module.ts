import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddCategoryComponent,
    DetailCategoryComponent,
    CategoryComponent],

  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
