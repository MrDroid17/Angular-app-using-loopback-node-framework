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
  token: any;
  username: string;

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


  constructor(
    private http: Http
  ) { }


  getHeaders(): any {
    // this.loadToken();
    const headers = new Headers();
    // headers.append(HEADERS.AUTHENTICATION_TOKEN_KEY, this.token);
    // headers.append(HEADERS.STAFF_USER_ID_KEY, this.username);
    headers.append('Content-Type', 'application/json');
    return headers;
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
