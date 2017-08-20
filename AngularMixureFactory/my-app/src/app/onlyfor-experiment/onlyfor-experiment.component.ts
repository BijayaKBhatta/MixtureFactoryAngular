import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onlyfor-experiment',
  templateUrl: './onlyfor-experiment.component.html',
  styleUrls: ['./onlyfor-experiment.component.css']
})
export class OnlyforExperimentComponent implements OnInit {
  recentSelectedProduct ='None';
    public cart = [];

  public allNamkeenProducts = ['Chana Dal', 'Aloo Bhujia', 'Moong Dal'];

  constructor() { }

  ngOnInit() {
  }
  public selectedProduct(id,namkeen) {
    this.recentSelectedProduct = this.recentSelectedProduct+namkeen;
    alert('Product Added to Cart '+id+' - '+namkeen + 'All Namkeen selected is '+this.recentSelectedProduct);
    console.log(this.recentSelectedProduct);
  }
}
