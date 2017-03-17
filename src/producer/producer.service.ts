/**
 * Created by hubertus on 3/15/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProducerService{
  constructor(private _http: Http){}

  getProducers(){
    return this._http.get("http://localhost:8080/producers")
      .map((response: Response) => response.json());
  }

}
