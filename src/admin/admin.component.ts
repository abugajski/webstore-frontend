/**
 * Created by adam on 3/18/17.
 */
import {Component, OnInit} from "@angular/core";
import {ProducerService} from "../producer/producer.service";
import {CategoryService} from "../category/category.service";
import {Category} from "../category/category.model";
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
  addCategory(){
    console.log("addCategory");
    var category = new Category();
    category.name = '';
    category.id = null;
    this.categories.push(category);
  }

  saveChanges(){
    console.log("saveChanges");
    for (let category of this.categories){
      if(category.id === null){
        this._categoryService.create(category.name );
      }else {
        this._categoryService.update(category);
      }
    }
  }

  deleteCategory(category: Category){
    /*
    * TODO
    * delete from category array if categoryService.delete proceed well
    * */
    this._categoryService.delete(category.id);
    var index = this.categories.indexOf(category);
    this.categories.splice(index,1);
  }

}
