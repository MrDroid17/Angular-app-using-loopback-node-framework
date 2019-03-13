import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    private router: Router,
    public authService: AuthService,
    private notificationService: NotificationService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }

  signupUser(user) {
    this.authService.userSignUp(user).subscribe(res => {
      if (res['id']) {
        this.notificationService.success('Success', 'User Registered.');
        this.router.navigate(['login']);
      }
    }, error => {
      this.dialogService.openErrorDialog(`Error-code: ${error['status']}` + '\n Email id already exist.');
    });
  }

}
