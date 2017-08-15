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
  name: string;
  password:string;
  shopname: string;
  address: string;
  role: string;
  phone1: string;
  phone2: string;
  lnumber: string;
  salespersonname: string;
  email: string;

  model: any = {};

  ngOnInit() {
  }
  registerUser()
  {
    this.isRestisterSuccess = 'Register Succesfull';
  }
  userTypes = ['Retailer', 'Sales Person',
            'Admin'];



registerNewUser(){
  //this.name,this.password,this.shopname,this.address,this.role,
    //          this.phone1, this.phone2, this.lnumber, this.salespersonname,this.email
               this.fetchCustomerDetailsService.postImplementNew(this.model).subscribe(
                res => {
                  console.log(res);
                  //this.country = res.RestResponse.messages[0] ;
                  //this.country = this.country + res.RestResponse.messages[1];
                  //json handing
                } 
               );
  }
          
}