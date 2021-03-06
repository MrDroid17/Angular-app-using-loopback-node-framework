// tslint:disable: max-line-length
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { headersToString } from 'selenium-webdriver/http';
import { environment } from '../../environments/environment';
// import { HEADERS } from '../utils/Constant'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  access_token: any;
  user_id: string;
  regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

  signupForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern(this.regex)]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
  });

  loginForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    email: new FormControl('', [Validators.required, Validators.pattern(this.regex)]),
    password: new FormControl('', [Validators.required]),
  });

  /***
   * urls
   */
  LOGIN_URL: string = environment.serverUrl + '/api/Users/login';
  SIGNUP_URL: string = environment.serverUrl + '/api/Users';
  GET_USER_PROFILE_URL: string = environment.serverUrl + '/api/Users/';
  // category url
  CATEGORY_URL: string = environment.serverUrl + '/api/Categories';

  constructor(
    private http: Http
  ) { }


  // store admin data to local storage
  storeAdminData(access_token, user_id, checked) {
    if (checked) {
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('user_id', user_id);
    } else {
      sessionStorage.setItem('access_token', access_token);
      sessionStorage.setItem('user_id', user_id);
    }
  }

  // load token
  private loadToken() {
    if (localStorage.getItem('access_token') !== null) {
      this.access_token = localStorage.getItem('access_token');
      this.user_id = localStorage.getItem('user_id');
    } else if (sessionStorage.getItem('access_token') !== null) {
      this.access_token = sessionStorage.getItem('access_token');
      this.user_id = sessionStorage.getItem('user_id');
    } else {
      this.access_token = '';
      this.user_id = '';
    }
  }

  // clear access_token on logout
  logout() {
    this.access_token = null;
    localStorage.clear();
    sessionStorage.clear();
  }

  // get headers
  getHeaders(): any {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  // get token
  getToken(){
    this.loadToken();
    return this.access_token;
  }

  // authenticate
  userLogin(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.LOGIN_URL, user, { headers: headers }).pipe(map(res => res.json()));
  }

  // sign up
  userSignUp(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.SIGNUP_URL, user, { headers: headers }).pipe(map(res => res.json()));
  }


}
