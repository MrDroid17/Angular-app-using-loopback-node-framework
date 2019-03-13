import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { Category } from 'src/app/interfaces/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  label: string;
  saveButton: string;
  typeArray: object[];

  constructor(
    private router: Router,
    public categoryService: CategoryService,
    private notificationService: NotificationService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.typeArray = [
      { id: 1, name: 'global' },
      { id: 2, name: 'local' },
      { id: 3, name: 'hybrid' },
    ];

    this.label = 'Add Category';
    this.saveButton = 'Add';
  }

  onFormReset() {
    this.categoryService.categoryForm.reset();
    this.notificationService.success('Success', 'Form reset.');
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


}
