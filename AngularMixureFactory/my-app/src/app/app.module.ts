import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginUserComponent } from './login-user/login-user.component';

import {RouterModule,Routes} from '@angular/router';


const appRoutes: Routes= [
  {path:'registration',component:RegistrationComponent},
  {path: 'login',component:LoginUserComponent}

];

@NgModule({
  declarations: [ 
    AppComponent,
    RegistrationComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
