import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FetchCustomerDetailsService {

  constructor(private http:Http) { }


 headers = new Headers({
    'Content-Type': 'application/json'
  });
  //https://stackoverflow.com/questions/37051476/how-do-i-post-json-in-angular-2


public postImplement(): Observable<any>
{

  var json = JSON.stringify({var1: 'test', var2: 11});
  var params = 'json='+json;
  var headers = new Headers()
  headers.append('Content-Type', 'application/json');
  const URL = 'http://validata.jsontest.com';
  return this.http.post(URL,params)
  .map(res => res.json())

}


public getCustomerDetails(searchId): Observable<any>
  {
    const searchCust = 'Customer details';
    //call API Here
    var idd=10;
    const URL = 'http://127.0.0.1:8080/productdata?id='+searchId;
    //const URL = 'http://services.groupkt.com/country/get/iso2code/IN';
    //this.http.post(URL,aaa JSON.stringify(searchCust), {headers:{'':''})
    return this.http.get(URL).map(
      res => {
        const data = res.json();
        return data;
      }
    )

  }

  public loginCustomerDetails(username): Observable<any>
  {
    const searchCust = 'Customer details';
    //call API Here
    var idd=111;
    const URL = 'http://127.0.0.1:8080/productdata?id='+username;
    console.log(URL);
    //const URL = 'http://services.groupkt.com/country/get/iso2code/IN';
    //this.http.post(URL,aaa JSON.stringify(searchCust), {headers:{'':''})
    return this.http.get(URL).map(
      res => {
        const data = res.json();
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

createJson() {
    let books = [
      { id: 1, name: 'Core Java' },
      { id: 2, name: 'Angular 2' },
      { id: 3, name: 'Hibernate' }
    ];
    return {books};
  }

}