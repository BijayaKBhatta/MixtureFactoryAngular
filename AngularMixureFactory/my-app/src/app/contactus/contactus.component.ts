import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { FetchCustomerDetailsService } from '../spring-boot/fetch-customer-details.service';
FetchCustomerDetailsService

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
providers: [FetchCustomerDetailsService]

})
export class ContactusComponent implements OnInit {
model:any = {}
  constructor(private fetchCustomerDetailsService: FetchCustomerDetailsService, private router: Router) { }
  ngOnInit() {
  }

  contactUs() {
    //console.log(this.model);
    this.fetchCustomerDetailsService.contactUs(this.model).subscribe(
      res => {
        console.log(res);
        if (res == false)
          //this.isloginSuccess = 'Please enter correct Username and Passwird'+res;//.id+'password: '+res.name;
          this.router.navigate(['contactus']);

        else
          this.router.navigate(['contactus']);
      }
    );

  }
}
