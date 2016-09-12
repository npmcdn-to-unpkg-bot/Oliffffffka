import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AboutMeService {
  
  private _getUrl = 'http://localhost/Oliwka/back/about/';
  private _postUrl = 'http://localhost/Oliwka/back/about/new/';

  constructor(private _http: Http) { }
  
  getInfo(): Observable<Object> {
    return this._http.get(this._getUrl).map(
      (res: Response) => res.json() || {}
    );
  }
  
  upload(data): Observable<Object> {
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this._postUrl, body, options).map(
      (res: Response) => res.json() || {}
    );
  }

}
