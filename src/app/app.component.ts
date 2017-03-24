import {Component, OnInit} from '@angular/core';
import { CategoryService } from '../category/category.service';
import { ProducerService } from '../producer/producer.service';
import {Category} from "../category/category.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  producers = [];
  categories = [];

  constructor(private _producerService: ProducerService,
              private _categoryService: CategoryService){}

  ngOnInit(){
    this._producerService.getProducers()
      .subscribe(resProducers => this.producers = resProducers);

    this._categoryService
      .getCategories()
      .then(resCategories => this.categories = resCategories);

  }

}
