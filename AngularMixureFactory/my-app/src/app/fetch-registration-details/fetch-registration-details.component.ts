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

  public servicecall='Lets call servicesss';
  public country='';
  public searchId='';
  public ff='aaa';
  constructor(private fetchCustomerDetailsService: FetchCustomerDetailsService ) { }
  str: string;

  ngOnInit() {

  }

  onkeyup(event){
    this.searchId = event.target.value;
  }

  getUser(){
        this.ff = 'Register Suchhhhhhhhcesfull';
               this.fetchCustomerDetailsService.getCustomerDetails(this.str).subscribe(
                res => {
                  console.log(res);
                  this.servicecall = 'Webservice called :    --'+this.str;
                  this.country  = res.id;
                  this.country = this.country + res.name;
                  this.country = this.searchId;
                  //this.country = res.RestResponse.messages[0] ;
                  //this.country = this.country + res.RestResponse.messages[1];
                  //json handing
                } 
               );
  }


  getUserpost(){
   // https://www.youtube.com/watch?v=L7xPwhwbcHE
        //this.ff = 'Register Suchhhhhhhhcesfull';
               this.fetchCustomerDetailsService.postImplement().subscribe(
                res => {
                  console.log(res);
                  this.servicecall = 'Webservice called :    ';
                  this.country  = res.id;
                  this.country = this.country + res.name;
                } 
               );

  }

}
