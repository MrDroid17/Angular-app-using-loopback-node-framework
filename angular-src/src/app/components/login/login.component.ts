import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checked = false;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.loginForm.reset();
  }

  loginUser(user) {
    this.authService.userLogin(user).subscribe(res => {
      this.authService.loginForm.reset();
      if (res['id']) {
        this.authService.storeAdminData(res['id'], res['userId'], this.checked);
        this.router.navigate(['category']);
      } else {

      }

    });
  }

}
