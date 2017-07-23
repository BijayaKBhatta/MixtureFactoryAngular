import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginUserComponent } from './login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
