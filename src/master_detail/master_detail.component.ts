/**
 * Created by hubertus on 3/20/17.
 */
import { Component, OnInit } from '@angular/core';
import { DetailService } from './master_detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'master_detail',
  templateUrl: './master_detail.component.html',
  styleUrls: ['./master_detail.component.css']
})

export class MasterDetailComponent implements OnInit{

  prods = [];
  idx: number;
  sub: any;

  constructor(private _detailService: DetailService, private _route: ActivatedRoute){}

  ngOnInit(): void {

    this.sub = this._route.params
      .subscribe(params => this.idx =+ params['id']);

    this._detailService.getProduct(this.idx)
      .subscribe(response => this.prods = response);
  }


}
