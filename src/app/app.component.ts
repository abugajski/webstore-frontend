import { Component } from '@angular/core';
import {CategoryService} from "../category/category.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categoryService = CategoryService;
  title = 'app works!';
}
