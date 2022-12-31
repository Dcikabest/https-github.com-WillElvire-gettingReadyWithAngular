import { Component, Input, OnInit } from '@angular/core';
import { productInfo } from 'src/app/common/interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productInfo ?:productInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
