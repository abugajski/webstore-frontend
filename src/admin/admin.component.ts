/**
 * Created by adam on 3/18/17.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css' ]
})

export class AdminComponent {
  producers = [ ];
  categories = [ ];

  constructor(private router: Router){}

  fun(){
    this.router.navigate(['/admin', {outlets: {admcat: 'prod'}}]);
  }

  fun2(){
    this.router.navigate(['/admin', {outlets: {admcat: 'cat'}}]);
  }

  fun4(){
    this.router.navigate(['/admin', {outlets: {admcat: 'flav'}}]);
  }

}
