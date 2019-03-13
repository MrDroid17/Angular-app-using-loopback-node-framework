// tslint:disable: max-line-length
import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    description: new FormControl('', Validators.required),
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  // Get user profile
  getUserProfile(userid) {
    const headers = this.authService.getHeaders();
    const ACCESS_TOKEN = this.authService.getToken();
    return this.http.get(this.authService.GET_USER_PROFILE_URL + userid + `?access_token=${ACCESS_TOKEN}`, { headers: headers }).pipe(map(res => res.json()));
  }

  // add category
  addCategory(category){
    const headers = this.authService.getHeaders();
    const ACCESS_TOKEN = this.authService.getToken();
    return this.http.post(this.authService.CATEGORY_URL + `?access_token=${ACCESS_TOKEN}`, category,{ headers: headers }).pipe(map(res => res.json()));
  }

  // edit category
  editCategory(category){
    const headers = this.authService.getHeaders();
    const ACCESS_TOKEN = this.authService.getToken();
    return this.http.put(this.authService.CATEGORY_URL + `?access_token=${ACCESS_TOKEN}`, category,{ headers: headers }).pipe(map(res => res.json()));
  }

  // delete category
  deleteCategory(category_id){
    const headers = this.authService.getHeaders();
    const ACCESS_TOKEN = this.authService.getToken();
    return this.http.delete(this.authService.CATEGORY_URL + category_id + `?access_token=${ACCESS_TOKEN}`,{ headers: headers }).pipe(map(res => res.json()));
  }

}
