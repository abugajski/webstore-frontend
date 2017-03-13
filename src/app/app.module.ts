import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CategoryService} from "../category/category.service";
import {CategoryComponent} from "../category/category.component";
import {MaterialModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
