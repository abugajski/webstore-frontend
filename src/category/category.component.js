"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var category_service_1 = require('../category/category.service');
var CategoryComponent = (function () {
    function CategoryComponent(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
    }
    CategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService
            .getCategories()
            .then(function (categories) { return _this.categories = categories; });
    };
    CategoryComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.categoryService.create(name)
            .then(function (category) {
            _this.categories.push(category);
            _this.selectedCategory = null;
        });
    };
    CategoryComponent.prototype.delete = function (category) {
        var _this = this;
        this.categoryService
            .delete(category.id)
            .then(function () {
            _this.categories = _this.categories.filter(function (h) { return h !== category; });
            if (_this.selectedCategory === category) {
                _this.selectedCategory = null;
            }
        });
    };
    CategoryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoryComponent.prototype.onSelect = function (category) {
        this.selectedCategory = category;
    };
    CategoryComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedCategory.id]);
    };
    CategoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'categories',
            templateUrl: 'category.component.html',
            styleUrls: ['../category/category.component.css']
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService, router_1.Router])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map