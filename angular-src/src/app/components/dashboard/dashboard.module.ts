// tslint:disable: max-line-length
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './category/category.component';

import {
  MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatSidenavModule,
  MatIconModule, MatListModule, MatCardModule, MatMenuModule, MatSelectModule, MatSnackBarModule, MatOptionModule, MatCheckboxModule, MatTooltipModule, MatDialogModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddCategoryComponent,
    DetailCategoryComponent,
    CategoryComponent,
    ToolbarComponent],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class DashboardModule { }
