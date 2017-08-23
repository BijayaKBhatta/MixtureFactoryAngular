import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(public activeroute: ActivatedRoute) { }

  ngOnInit() {
    const item = this.activeroute.snapshot.params['prodcuid'];
    console.log(item);
  }

}
