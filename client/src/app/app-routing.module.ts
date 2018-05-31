import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './components/registration/registration.component';
import { AcknowledgeComponent } from './components/acknowledge/acknowledge.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent},
  { path: 'acknowledge', component: AcknowledgeComponent},
  { path: '**', redirectTo: '/registration'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
