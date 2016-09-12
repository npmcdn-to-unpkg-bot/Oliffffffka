import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import '../rxjs-operators';

@Injectable()
export class LoginService {

  private _isAuth = new Subject<boolean>();
  isAuth$ = this._isAuth.asObservable();

  private _loginUrl = 'http://localhost/Oliwka/back/login/';
  private _checkUrl = 'http://localhost/Oliwka/back/check/';

  constructor(
      private _http: Http
  ){}

  login(login, password): Observable<Object> {
    let body = JSON.stringify({
      login: login,
      password: password
    });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    
    return this._http.post(this._loginUrl, body, options)
                    .map(
                          (response: Response) => response.json() || {}
                    );
  }

  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

}
