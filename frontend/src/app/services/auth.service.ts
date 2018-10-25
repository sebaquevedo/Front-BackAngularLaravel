import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Login } from '../models/login';
import { User } from '../models/user';
import { Authentication } from '../models/authentication';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(login: Login) {
    return this.http.post<Authentication>(`${environment.baseUrl}/user/login`, login);
  }

  public logout() {
      // remove user from local storage to log user out
      localStorage.removeItem(environment.localUser);
      localStorage.removeItem(environment.localToken);
  }

  public setToken(token: string) {
    if (token) {
      localStorage.setItem(environment.localToken, token);
    }
  }

  public getToken() {
    return localStorage.getItem(environment.localToken);
  }

  public setUser(user) {
    if (user) {
      localStorage.setItem(environment.localUser, JSON.stringify(user));
    }
  }

  public getUser() {
    return JSON.parse(localStorage.getItem(environment.localUser));
  }

  public getUserInfo() {
    return this.http.get<User>(`${environment.baseUrl}/user`);
  }

}
