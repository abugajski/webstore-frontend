import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { RegistrationComponent } from '../registration/registration.component';

const routes: Routes = [
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
