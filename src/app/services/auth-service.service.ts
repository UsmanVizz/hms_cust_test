import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../environment/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  public readonly USER_STORAGE_KEY = "userId";
  public readonly USERNAME_STORAGE_KEY = "userName";

  private loginUrl = environment.apiBaseUrl + environment.loginApi;

  signIn = ["/auth/login"];

  constructor(private router: Router, private http: HttpClient) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.USER_STORAGE_KEY);
  }

  login(userId: string, userName: string): void {
    localStorage.setItem(this.USER_STORAGE_KEY, userId);
    localStorage.setItem(this.USERNAME_STORAGE_KEY, userName);
  }

  logout(): void {
    localStorage.removeItem(this.USER_STORAGE_KEY);
    localStorage.removeItem(this.USERNAME_STORAGE_KEY);
    this.router.navigate(this.signIn);
  }

  getLoggedInUserName(): string | null {
    return localStorage.getItem(this.USERNAME_STORAGE_KEY);
  }

  userSignup(obj: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl + environment.signupApi, obj);
  }

  userLoggedIn(obj: any): Observable<any> {
    return this.http.post(this.loginUrl, obj);
  }
}
