/**
 * Created by hubertus on 3/15/17.
 */
import { Component, OnInit} from '@angular/core';
import { ProducerService } from '../producer/producer.service';
import { CategoryService } from "../category/category.service";

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit{

  producers = [];
  categories = [];

  constructor(private _producerService: ProducerService,
  private _categoryService: CategoryService){}

  ngOnInit(){

  }

}
