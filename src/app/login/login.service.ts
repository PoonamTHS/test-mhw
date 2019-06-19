import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  [x: string]: any;
  // tslint:disable-next-line: variable-name
  private _userIsAuthenticated = false;
  private url = 'http://healstationfoundation.org/UserRegistration/';
  private apiurl = this.url + 'register_hsf.php';

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor(private http: HttpClient) { }
  Login_reg(logIn: any): Observable<any> {
    let body = JSON.stringify(logIn);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.apiurl, body, httpOptions);
  }


}
