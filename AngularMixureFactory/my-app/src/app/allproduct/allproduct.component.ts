import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  products = ['Chana Dal', 'Aloo Bhujia', 'Moong Dal','some other namkeen','other','aa'];
  products_image = ['http://2.wlimg.com/product_images/bc-full/dir_19/552399/chana-dal-namkeen-1285259.jpg', 
'https://i.ytimg.com/vi/5bO3ouBAlGQ/maxresdefault.jpg',
'http://www.manjulaskitchen.com/blog/wp-content/uploads/aloo_bhujia_potato_sev.jpg'
]
  //products = ['Chana Dal', 'Aloo Bhujia'];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showProduct(product) {
    //alert("Product is: "+product);
    console.log(product.split(' ').join(''));
    //this.router.navigate(['productdetails', product.split(' ').join('')]);
    this.router.navigate(['productdetails']);
  }
}
