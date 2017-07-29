import { Component, OnInit } from '@angular/core';
import { FetchCustomerDetailsService } from '../spring-boot/fetch-customer-details.service';
         FetchCustomerDetailsService
@Component({
  selector: 'app-fetch-registration-details',
  templateUrl: './fetch-registration-details.component.html',
  styleUrls: ['./fetch-registration-details.component.css'],
  providers: [FetchCustomerDetailsService]
})
export class FetchRegistrationDetailsComponent implements OnInit {

  public servicecall='Lets call service';
  public country='';
  constructor(private fetchCustomerDetailsService: FetchCustomerDetailsService ) { }

  ngOnInit() {

  }

  getUser(){
        //this.ff = 'Register Suchhhhhhhhcesfull';
               this.fetchCustomerDetailsService.getCustomerDetails().subscribe(
                res => {
                  console.log(res);
                  this.servicecall = 'Webservice called :    ';
                  this.country = res.RestResponse.messages[1] ;
                  this.country = this.country + res.RestResponse.messages[0];
                } 
               );

  }
}
