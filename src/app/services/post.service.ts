import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  private _url_all = 'http://localhost/Oliwka/back/posts/';
  private _url_cat = 'http://localhost/Oliwka/back/category/';
  private _url_spec = 'http://localhost/Oliwka/back/post/';

  constructor(private _http: Http) { }
  
  getAll(): Observable<Object> {
    return this._http.get(this._url_all).map(
      (res: Response) => res.json() || {}
    );
  }
  
  getCat(cat): Observable<Object> {
    return this._http.get(this._url_cat + cat).map(
      (res: Response) => res.json() || {}
    );
  }
  
  getSpec(id): Observable<Object> {
    return this._http.get(this._url_spec + id).map(
      (res: Response) => res.json() || {}
    );
  }

}
