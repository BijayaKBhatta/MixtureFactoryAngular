import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginUserComponent } from './login-user/login-user.component';

import {RouterModule,Routes} from '@angular/router';
import { FetchRegistrationDetailsComponent } from './fetch-registration-details/fetch-registration-details.component';

import { HttpModule } from '@angular/http';
//import { MaterialModule } from '@angular/material';
//import { AlertModule } from 'ngx-bootstrap';
import{HeaderComponent} from './header/header.component'
import{FooterComponent} from './footer/footer.component';
import { AbutusComponent } from './abutus/abutus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component'

const appRoutes: Routes= [
  {path:'',component:LoginUserComponent},
  {path:'registration',component:RegistrationComponent},
  {path: 'login',component:LoginUserComponent},
  {path: 'fetchCustDetails', component:FetchRegistrationDetailsComponent},
  {path: 'contactus', component:ContactusComponent}

];

@NgModule({
  declarations: [ 
    AppComponent,
    RegistrationComponent,
    LoginUserComponent,
    FetchRegistrationDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AbutusComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
   // AlertModule.forRoot(),
    BrowserModule,
    HttpModule,
    //MaterialModule,
	  FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
