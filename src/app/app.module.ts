import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CategoryComponent } from '../category/category.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { routingComponents } from './app-routing.module';
import { ProducerComponent } from '../producer/producer.component';
import { RegistrationComponent } from '../registration/registration.component';

import { CategoryService } from '../category/category.service';
import { ProducerService } from '../producer/producer.service';
import { RegistrationService } from '../registration/registration.service';
import {MdlModule} from "angular2-mdl";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ToolbarComponent,
    ProducerComponent,
    RegistrationComponent,
    routingComponents
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MdlModule
  ],
  providers: [CategoryService, ProducerService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
