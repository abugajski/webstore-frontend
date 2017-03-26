/**
 * Created by hubertus on 3/26/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Flavor } from './flavor';

@Injectable()
export class FlavorService {

  private headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
  private flavorsUrl = 'http://localhost:8080/flavor';  // URL to web api

  constructor(private _http: Http){}

  getFlavors(){
    return this._http.get(this.flavorsUrl)
      .map((response: Response) => response.json());
  }

  create(name: string): Promise<Flavor> {
    return this._http
      .post(this.flavorsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Flavor);
  }

  update(category: Flavor): Promise<Flavor> {
    const url = `${this.flavorsUrl}`;
    return this._http
      .put(url, JSON.stringify(category), {headers: this.headers})
      .toPromise()
      .then(() => category);
  }

  delete(id: number): Promise<void> {
    const url = `${this.flavorsUrl}/${id}`;
    return this._http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

}
