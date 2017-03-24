import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { RegistrationComponent } from '../registration/registration.component';
import {AdminComponent} from "../admin/admin.component";

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '', component: ContentComponent}
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
export const routingComponents = [ContentComponent, RegistrationComponent]
