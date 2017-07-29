import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FetchCustomerDetailsService {

  constructor(private http:Http) { }


public getCustomerDetails(): Observable<any>
  {
    const searchCust = 'Customer details';
    //call API Here
    //const URL = 'http://localhost:8080/productdata/product';
    const URL = 'http://services.groupkt.com/country/get/iso2code/IN';
    //const searchText='js';
    //const URL = 'http://api.github.com/search/user/?q='+searchText;
     return this.http.get(URL).map(
    res => {
      const data = res.json();
      console.log('res='+data);
      return data;
    }
    )
  }



  /*public getCustomerDetails()
  {
    const searchCust = 'Customer details';
    //call API Here
    //const URL = 'http://localhost:8080/productdata/product';
    const URL = 'http://services.groupkt.com/country/get/iso2code/IN';
    //const searchText='js';
    //const URL = 'http://api.github.com/search/user/?q='+searchText;
     this.http.get(URL).subscribe(
    res => {
      console.log('aaaa');
      const data = res.json();
      console.log('res='+data);
      return res;
    }
    )
  }
*/



}
