import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatepickerModule as YourAlias } from 'angular2-material-datepicker'

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  products = ['Chana Dal', 'Moong Dal', 'Aloo Bhujia', 'some other namkeen', 'other', 'aa'];
  products_image = ['http://2.wlimg.com/product_images/bc-full/dir_19/552399/chana-dal-namkeen-1285259.jpg',
    'https://i.ytimg.com/vi/5bO3ouBAlGQ/maxresdefault.jpg',
    'http://www.manjulaskitchen.com/blog/wp-content/uploads/aloo_bhujia_potato_sev.jpg',
    'http://2.wlimg.com/product_images/bc-full/dir_19/552399/chana-dal-namkeen-1285259.jpg',
    'https://i.ytimg.com/vi/5bO3ouBAlGQ/maxresdefault.jpg',
    'http://www.manjulaskitchen.com/blog/wp-content/uploads/aloo_bhujia_potato_sev.jpg'
  ]
  //products = ['Chana Dal', 'Aloo Bhujia'];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onMouseOver(idx) {
    if (idx == 1)
      this.products_image[1] = 'http://www.manjulaskitchen.com/blog/wp-content/uploads/aloo_bhujia_potato_sev.jpg';
  }
    showProduct(product) {
    var product = product.split(' ').join('');
    alert("Product is: " + product);
    localStorage.setItem('currentSessionProduct', product);
    console.log(product);
    //this.router.navigate(['productdetails', product.split(' ').join('')]);
    this.router.navigate(['productdetails', product]);
  }
}
