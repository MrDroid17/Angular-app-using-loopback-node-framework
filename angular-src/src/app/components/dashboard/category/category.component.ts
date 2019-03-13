import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { Category } from 'src/app/interfaces/category';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['category_name', 'description', 'type', 'actions'];
  catergoryList: Category[];
  categoryCount: number;
  categoryDataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAllCategories().subscribe(res => {
      this.catergoryList = res;
      this.categoryCount = this.catergoryList.length;
      this.categoryDataSource = new MatTableDataSource(this.catergoryList);
      this.categoryDataSource.sort = this.sort;
      this.categoryDataSource.paginator = this.paginator;
      if (res.length === 0) {
        this.dialogService.openErrorDialog(`Empty category list please add some category.`);
      }

    }, error => {
      this.dialogService.openErrorDialog(`Error-code: ${error['status']}` + '\n Error getting categories.');
    });
  }

  onDeleteCategory(category_id) {
    this.dialogService
      .openDeleteDialog('Are you sure to delete this category?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.categoryService.deleteCategory(category_id).subscribe(res => {
            this.getAllCategory();
          }, error => {
            this.dialogService.openErrorDialog(`Error-code: ${error['status']}` + '\n Error deleting category');
          });
        }
      });
  }

  getEllipsizeDescription(description) {
    let proper_title = '';
    if (description.length > 40) {
      proper_title = description.substring(0, 37) + '...';
    } else {
      proper_title = description;
    }
    return proper_title;
  }

  editComponent(category) {
    this.router.navigate([`category/edit/${category.id}`])
  }

}
