import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { FetchCustomerDetailsService } from '../spring-boot/fetch-customer-details.service';
         FetchCustomerDetailsService
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  providers: [FetchCustomerDetailsService]

})
export class LoginUserComponent implements OnInit {
username: string;
password: string;
  constructor(private fetchCustomerDetailsService: FetchCustomerDetailsService, private router: Router ) { }
  public isloginSuccess = '';

  model: any = {};

  ngOnInit() {
  }

loginUser()
  {
    //this.isloginSuccess = this.username;
   // this.isloginSuccess = this.isloginSuccess+this.loginUser;

               this.fetchCustomerDetailsService.loginCustomerDetails(this.model).subscribe(
                res => {
                  console.log(res);
                  if (res==false)
                    this.isloginSuccess = 'Please enter correct Username and Passwird'+res;//.id+'password: '+res.name;
                    else
                      this.router.navigateByUrl('<pathDefinedInRouteConfig>');
                    //this.country = res.RestResponse.messages[0] ;
                  //this.country = this.country + res.RestResponse.messages[1];
                  //json handing
                } 
               );


  }

}
