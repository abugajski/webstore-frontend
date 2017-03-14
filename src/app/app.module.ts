import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CategoryService} from "../category/category.service";
import {CategoryComponent} from "../category/category.component";
import {MaterialModule} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ContentComponent } from '../content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ToolbarComponent,
    ContentComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
