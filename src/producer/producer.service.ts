/**
 * Created by hubertus on 3/15/17.
 */
import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {ProducerModel} from "./producer.model";
import {Observable} from "rxjs";
import {error} from "selenium-webdriver";

@Injectable()
export class ProducerService{

  private headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
  private categoriesUrl = 'http://localhost:8080/producers';  // URL to web api

  constructor(private _http: Http){}

  getProducers(){
    return this._http.get("http://localhost:8080/producers")
      .map((response: Response) => response.json());
  }

  create(name: string): Observable<ProducerModel> {
    return this._http
      .post(this.categoriesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
