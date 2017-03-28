import { Component, OnInit } from '@angular/core';
import { Category }                from './category.model';
import { CategoryService }         from '../category/category.service';

@Component({
  //moduleId: module.id,
  selector: 'categories',
  templateUrl: 'category.component.html',
  styleUrls: [ '../category/category.component.css' ]
})
export class CategoryComponent implements OnInit {

  categories = [];

  constructor(private _categoryService: CategoryService){}

  ngOnInit(){
    this.getCategories();
  }

  addCategory(){
    var category = new Category();
    category.name = null;
    category.id = null;
    this.categories.push(category);
  }

  saveCategoryChanges(){
    console.log("saveChanges");
    for (let category of this.categories){
      if(category.id === null && category.name != null){
        this._categoryService.create(category.name)
          .then(() => {this.getCategories();});
      }else {
        if(category.name != null && category.name != ''){
          this._categoryService.update(category)
            .then(() => {this.getCategories();});
        }
        else {
          this.getCategories();
        }
      }
    }
  }

  deleteCategory(category: Category){
    if(category.id != null){
      this._categoryService.delete(category.id);
    }
    var index = this.categories.indexOf(category);
    this.categories.splice(index,1);
  }

  getCategories(): void{
    this._categoryService
      .getCategories().
      then(resCategories => this.categories = resCategories);
  }

}
