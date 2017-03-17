/**
 * Created by hubertus on 3/15/17.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {RegistrationService} from "./registration.service";
import { Headers, Http } from '@angular/http';

@Component({
  selector: 'registrationForm',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css']

})

export class RegistrationComponent implements OnInit {
  private headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
  regForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
  private _registrationService: RegistrationService, private http: Http){}

  ngOnInit(){
    this.regForm = this._formBuilder.group({
      'name': ['', [Validators.required, Validators.pattern("[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,40}")]],
      'surname': ['', [Validators.required, Validators.pattern("[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,40}")]],
      'email': ['', [Validators.required, Validators.maxLength(40), Validators.pattern("^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")]],
      'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
      'confirmPassword': ['', Validators.required]
    }, {'validator': this.matchingPasswords('password', 'confirmPassword')})
  }

   matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];
    if(confirmPassword.value !== "") {
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }
}

onSubmit(data){
 console.log(data);

  this.http
    .post('http://localhost:8080/registration', JSON.stringify(data), {headers: this.headers})
    .toPromise()
    .then(res => res.json());
}


}
