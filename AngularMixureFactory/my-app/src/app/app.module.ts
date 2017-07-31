import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginUserComponent } from './login-user/login-user.component';

import {RouterModule,Routes} from '@angular/router';
import { FetchRegistrationDetailsComponent } from './fetch-registration-details/fetch-registration-details.component';

import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

const appRoutes: Routes= [
  {path:'registration',component:RegistrationComponent},
  {path: 'login',component:LoginUserComponent},
  {path: 'fetchCustDetails', component:FetchRegistrationDetailsComponent}

];

@NgModule({
  declarations: [ 
    AppComponent,
    RegistrationComponent,
    LoginUserComponent,
    FetchRegistrationDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
