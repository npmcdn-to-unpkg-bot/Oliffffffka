import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  private _urlGet = 'http://localhost/Oliwka/back/categories/';
  private _urlEdit = 'http://localhost/Oliwka/back/category/edit/';
  private _urlNew = 'http://localhost/Oliwka/back/category/new/';
  private _urlDelete = 'http://localhost/Oliwka/back/category/delete/';

  constructor(private _http: Http) { }
  
  getCategories(): Observable<Object>{
    return this._http.get(this._urlGet).map(
      (res: Response) => res.json() || {}
    );
  }

  getCategory(id): Observable<Object> {
    return this._http.get(this._urlGet + id).map(
      (res: Response) => res.json() || {}
    );
  }

  edit(data): Observable<Object> {
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this._urlEdit + data.id, body, options).map(
      (res: Response) => res.json() || {}
    );
  }

  add(data): Observable<Object> {
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this._urlNew, body, options).map(
      (res: Response) => res.json() || {}
    );
  }

  delete(id): Observable<Object> {
    return this._http.delete(this._urlDelete + id).map(
      (res: Response) => res || {}
    );
  }
 
}
