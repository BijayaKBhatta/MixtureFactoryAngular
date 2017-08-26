import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  public img_url = "";
  public img_name ="";
  public zoom_img=[];
  public img="https://5.imimg.com/data5/JT/KF/GLADMIN-1793797/chana-dal-250x250.jpg";
  constructor(public activeroute: ActivatedRoute) { }

  ngOnInit() {
    const item = this.activeroute.snapshot.params['productId'];
    console.log(item);
    this.img_name=item;
    if(item=="ChanaDal")
      this.img_url = this.img;
    else 
    //alert('item is: :  '+item);
    this.img_url = 'http://www.manjulaskitchen.com/blog/wp-content/uploads/aloo_bhujia_potato_sev.jpg';
  }

  onMouseOut()
  {
    this.img_url = 'https://5.imimg.com/data5/JT/KF/GLADMIN-1793797/chana-dal-250x250.jpg'; 
  }
  onMouseOver()
  { 
    this.img_url = 'http://2.wlimg.com/product_images/bc-full/dir_19/552399/chana-dal-namkeen-1285259.jpg';
  }
  
}
