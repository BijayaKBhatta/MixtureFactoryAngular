import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = ['Chana Dal', 'Aloo Bhujia', 'Moong Dal'];

  constructor() { }

  ngOnInit() {
  }

}
