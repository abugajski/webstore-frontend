/**
 * Created by hubertus on 3/15/17.
 */
import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Producer} from "./producer.model";
import {Observable} from "rxjs";
import {error} from "selenium-webdriver";

@Injectable()
export class ProducerService{

  private headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
  private producersUrl = 'http://localhost:8080/producers';  // URL to web api

  constructor(private _http: Http){}

  getProducers(){
    return this._http.get("http://localhost:8080/producers")
      .map((response: Response) => response.json());
  }

  create(name: string): Promise<Producer> {
    return this._http
      .post(this.producersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Producer);
  }

  update(category: Producer): Promise<Producer> {
    const url = `${this.producersUrl}`;
    return this._http
      .put(url, JSON.stringify(category), {headers: this.headers})
      .toPromise()
      .then(() => category);
  }

  delete(id: number): Promise<void> {
    const url = `${this.producersUrl}/${id}`;
    return this._http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null);
  }


}
