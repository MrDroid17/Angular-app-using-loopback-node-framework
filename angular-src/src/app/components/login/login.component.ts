import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checked = false;

  constructor(
    private router: Router,
    public authService: AuthService,
    private notificationService: NotificationService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.authService.loginForm.reset();
  }

  loginUser(user) {
    this.authService.userLogin(user).subscribe(res => {
      this.authService.loginForm.reset();
      if (res['id']) {
        this.authService.storeAdminData(res['id'], res['userId'], this.checked);
        this.notificationService.success('Success', 'Login successfull.');
        this.router.navigate(['category']);
      }
    }, error =>{
      this.dialogService.openErrorDialog(`Error-code: ${error['status']}` + '\n Please Enter correct username and password.');
    });
  }

}
