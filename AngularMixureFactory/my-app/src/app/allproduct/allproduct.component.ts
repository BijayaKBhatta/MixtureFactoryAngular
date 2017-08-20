import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  products = ['Chana Dal', 'Aloo Bhujia', 'Moong Dal'];
  //products = ['Chana Dal', 'Aloo Bhujia'];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showProduct(idx,product) {
    alert("Product is: "+product);
    this.router.navigate(['productdetails']);
  }

}
