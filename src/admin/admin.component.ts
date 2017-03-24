/**
 * Created by adam on 3/18/17.
 */
import {Component, OnInit} from "@angular/core";
import {ProducerService} from "../producer/producer.service";
import {CategoryService} from "../category/category.service";
@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['admin.component.css' ]
})

export class AdminComponent implements OnInit{
  producers = [ ];
  categories = [ ];

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
