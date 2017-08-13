import { Component, OnInit } from '@angular/core';
import { FetchCustomerDetailsService } from '../spring-boot/fetch-customer-details.service';
         FetchCustomerDetailsService


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
    providers: [FetchCustomerDetailsService]
})
export class RegistrationComponent implements OnInit {

  public isRestisterSuccess = '';
  constructor(private fetchCustomerDetailsService: FetchCustomerDetailsService ) { }
  str: string;

  ngOnInit() {
  }
  registerUser()
  {
    this.isRestisterSuccess = 'Register Succesfull';
  }
  userTypes = ['Retailer', 'Sales Person',
            'Admin'];



registerNewUser(){
               this.fetchCustomerDetailsService.getCustomerDetails(this.str).subscribe(
                res => {
                  console.log(res);
                  //this.country = res.RestResponse.messages[0] ;
                  //this.country = this.country + res.RestResponse.messages[1];
                  //json handing
                } 
               );
  }
          
}