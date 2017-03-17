/**
 * Created by hubertus on 3/16/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FormGroup } from '@angular/forms';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistrationService {

  private headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});

  constructor(private _http: Http) {
  }

  public create(data: FormGroup) {
    return this._http
      .post("http://localhost:8080/registration", data, this.headers);
  }


}
