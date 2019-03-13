import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { Category } from 'src/app/interfaces/category';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  label: string;
  saveButton: string;
  typeArray: object[];
  category_id;

  constructor(
    private router: Router,
    public categoryService: CategoryService,
    private notificationService: NotificationService,
    private dialogService: DialogService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.typeArray = [
      { id: 1, name: 'global' },
      { id: 2, name: 'local' },
      { id: 3, name: 'hybrid' },
    ];

    this.category_id = this.activatedRoute.snapshot.params['category_id'];
    this.categoryService.categoryForm.reset();
    if (this.category_id) {
      this.label = 'Edit Category';
      this.saveButton = 'Update';
      this.getCategory(this.category_id);
    } else {
      this.label = 'Add Category';
      this.saveButton = 'Add';
    }
  }

  onFormReset() {
    this.categoryService.categoryForm.reset();
    this.notificationService.success('Success', 'Form reset.');
  }

  saveCategory(category: Category) {
    if (category.id) {
      this.editCategory(category);
    } else {
      this.addCategory(category);
    }
  }

  addCategory(category: Category) {
    this.categoryService.categoryForm.reset();
    this.categoryService.addCategory(category).subscribe(res => {
      if (res['id']) {
        this.notificationService.success('Success', 'New Category Added.');
        this.router.navigate(['category']);
      }
    }, error => {
      this.dialogService.openErrorDialog(`Error-code: ${error['status']}` + '\n Error adding new category.');
    });
  }

  editCategory(category: Category) {
    this.categoryService.categoryForm.reset();
    this.categoryService.editCategory(category).subscribe(res => {
      if (res['id']) {
        this.notificationService.success('Success', 'Category updated.');
        this.router.navigate(['category']);
      }
    }, error => {
      this.dialogService.openErrorDialog(`Error-code: ${error['status']}` + '\n Error updating category.');
    });
  }


  getCategory(category_id) {
    this.categoryService.getCategory(category_id).subscribe(res => {
      if (res['id']) {
        this.categoryService.categoryForm.setValue(res);
      }
    }, error => {
      this.dialogService.openErrorDialog(`Error-code: ${error['status']}` + '\n Error getting category.');
    });
  }


}
