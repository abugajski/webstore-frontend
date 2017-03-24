/**
 * Created by hubertus on 3/22/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ContentService {

  constructor(private _http: Http){}

  getProducts(){
    return this._http.get("http://localhost:8080/mainPageProducts")
      .map((response: Response) => response.json());
  }

}
