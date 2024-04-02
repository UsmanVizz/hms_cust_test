import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environment/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PasswordRecoveryService {
  constructor(private http: HttpClient) {}

  passwordUrl = environment.apiBaseUrl + environment.forGotPasswordApi;
  verifyUrl = environment.apiBaseUrl + environment.verifyOtpApi;

  forgotPassword(obj: any): Observable<any> {
    return this.http.post(this.passwordUrl, obj);
  }

  verifyOtp(obj: any): Observable<any> {
    return this.http.post(this.verifyUrl, obj);
  }
}
