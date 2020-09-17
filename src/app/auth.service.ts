import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _registerUrl = "http://13.233.126.74:91/api/user";
  private _loginUrl = "http://13.233.126.74:91/api/user";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.get<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.get<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
