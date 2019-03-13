// tslint:disable: max-line-length
import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  // Get user profile
  getUserProfile(userid) {
    const headers = this.authService.getHeaders();
    const ACCESS_TOKEN = this.authService.getToken();
    debugger
    return this.http.get(this.authService.GET_USER_PROFILE_URL + userid + `?access_token=${ACCESS_TOKEN}`, { headers: headers }).pipe(map(res => res.json()));
  }

}
