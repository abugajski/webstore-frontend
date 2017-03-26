import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { RegistrationComponent } from '../registration/registration.component';
import { AdminComponent } from "../admin/admin.component";
import { CategoryComponent } from '../category/category.component';
import { ProducerComponent } from '../producer/producer.component';
import { FlavorComponent } from '../flavor/flavor.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent, children: [
    {path: 'cat', component: CategoryComponent, outlet: 'admcat'},
    {path: 'prod', component: ProducerComponent, outlet: 'admcat'},
    {path: 'flav', component: FlavorComponent, outlet: 'admcat'}
  ]},
  {path: 'registration', component: RegistrationComponent},
  {path: '', component: ContentComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{
}
export const routingComponents = [ContentComponent, RegistrationComponent, CategoryComponent, ProducerComponent]
