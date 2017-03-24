/**
 * Created by hubertus on 3/15/17.
 */
import { Component } from '@angular/core';
import { ContentService } from './content.service';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {

  products = [];

  constructor(private _contentService: ContentService){}

  ngOnInit(){

    this._contentService.getProducts()
      .subscribe(resProducers => this.products = resProducers);

  }

}
