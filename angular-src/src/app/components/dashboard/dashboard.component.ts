import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userid: string;
  username: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (!(localStorage.getItem('access_token') || sessionStorage.getItem('access_token'))) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['']);
    }
  }
}
