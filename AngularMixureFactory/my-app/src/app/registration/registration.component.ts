import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public isRestisterSuccess = '';
  constructor() { }

  ngOnInit() {
  }
  registerUser()
  {
    this.isRestisterSuccess = 'Register Succesfull';
  }
  userTypes = ['Retailer', 'Sales Person',
            'Admin'];
}
          
