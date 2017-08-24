import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  public img_url = "";
  constructor(public activeroute: ActivatedRoute) { }

  ngOnInit() {
    const item = this.activeroute.snapshot.params['productId'];
    console.log(item);
    if(item=="ChanaDal")
      this.img_url = 'http://2.wlimg.com/product_images/bc-full/dir_19/552399/chana-dal-namkeen-1285259.jpg';
    else 
    //alert('item is: :  '+item);
    this.img_url = 'http://www.manjulaskitchen.com/blog/wp-content/uploads/aloo_bhujia_potato_sev.jpg';
  }

}
