import { Product } from './../../models/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ProductArray : Product[] = []

  constructor() { }

  ngOnInit(): void {

    this.ProductArray.push(new Product(0,"Cubes", "This a Cube box", "10 $", "WE4B",'./assets/img/1.jpg' ))
    this.ProductArray.push(new Product(1,"Tesla", "This a Tesla car", "10000 $", "Tesla Comp",'./assets/img/2.jpeg' ))
    this.ProductArray.push(new Product(2,"HP Probook", "This a Laptop", "500 $", "HP LTD",'./assets/img/3.jpeg' ))
    this.ProductArray.push(new Product(3,"Smart TV", "This a Smart TV", "100 $", "LG",'./assets/img/4.jpeg' ))
  }

}
