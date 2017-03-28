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

  fun1(){
    this.router.navigate(['/admin', {outlets: {admcat: 'prod'}}]);
  }

  fun2(){
    this.router.navigate(['/admin', {outlets: {admcat: 'cat'}}]);
  }

  fun3(){
    this.router.navigate(['/admin', {outlets: {admcat: 'producen'}}]);
  }

  fun4(){
    this.router.navigate(['/admin', {outlets: {admcat: 'flav'}}]);
  }

  fun5(){
    this.router.navigate(['/admin', {outlets: {admcat: 'zam'}}]);
  }

  fun6(){
    this.router.navigate(['/admin', {outlets: {admcat: 'dos'}}]);
  }

  fun7(){
    this.router.navigate(['/admin', {outlets: {admcat: 'klien'}}]);
  }

}
