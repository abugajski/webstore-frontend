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

  constructor(private _categoryService: CategoryService) { }

  ngOnInit(){
    this._categoryService
      .getCategories()
      .then(resCategories => this.categories = resCategories);
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
      if(category.id == null){
        this._categoryService.create(category.name);
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

/*
  getCategories(): void {
    this.categoryService
        .getCategories()
        .then(categories => this.categories = categories);
  }


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.categoryService.create(name)
      .then(category => {
        this.categories.push(category);
        this.selectedCategory = null;
      });
  }

  delete(category: Category): void {
    this.categoryService
        .delete(category.id)
        .then(() => {
          this.categories = this.categories.filter(h => h !== category);
          if (this.selectedCategory === category) { this.selectedCategory = null; }
        });
  }
*/
}
