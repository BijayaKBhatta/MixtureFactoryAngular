import { Component, OnInit } from '@angular/core';
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
  constructor(private fetchCustomerDetailsService: FetchCustomerDetailsService ) { }
  public isloginSuccess = '';

  ngOnInit() {
  }

loginUser()
  {
    //this.isloginSuccess = this.username;
   // this.isloginSuccess = this.isloginSuccess+this.loginUser;

               this.fetchCustomerDetailsService.loginCustomerDetails(this.username).subscribe(
                res => {
                  console.log(res);
                  this.isloginSuccess = 'Response from webserice with username :    --'+res.id+'password: '+res.name;
                  //this.country = res.RestResponse.messages[0] ;
                  //this.country = this.country + res.RestResponse.messages[1];
                  //json handing
                } 
               );


  }

}
