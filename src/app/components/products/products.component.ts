import { Component, OnInit } from '@angular/core';
import { ProductFacades } from './../../common/facades/product.facade';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : [
    {
      provide : ProductFacades,
    }
  ]
})
export class ProductsComponent implements OnInit {

  constructor(public ProductList : ProductFacades ) { }

  ngOnInit(): void {

  }

}
