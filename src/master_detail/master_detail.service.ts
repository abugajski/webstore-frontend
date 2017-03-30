/**
 * Created by hubertus on 3/29/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DetailService {

  constructor(private _http: Http){}


  getProduct(id: number){
    return this._http.get('http://localhost:8080/product?idp='+id)
      .map((response: Response) => response.json());
  }

}
