import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  userid: string;
  username: string;

  constructor(
    private authService: AuthService,
    private categoryService: CategoryService,
    private router: Router

  ) { }

  ngOnInit() {
    // get user id
    if (localStorage.getItem('user_id')) {
      this.userid = localStorage.getItem('user_id');
    } else if (sessionStorage.getItem('user_id')) {
      this.userid = sessionStorage.getItem('user_id');
    } else {
      this.username = 'Username not found';
    }
    this.getProfile(this.userid);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  // get user profile
  getProfile(userid) {
    this.categoryService.getUserProfile(userid).subscribe(res => {
      if (res['id']) {
        this.username = res['username'];
      } else {

      }

    });
  }

}
