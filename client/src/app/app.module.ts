import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AcknowledgeComponent } from './components/acknowledge/acknowledge.component';
import { AppRoutingModule } from './/app-routing.module';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AcknowledgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
