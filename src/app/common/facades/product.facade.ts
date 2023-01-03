
import {Injectable} from '@angular/core';
import { productInfo } from '../interface';
import { Products } from './../mook/index';

@Injectable()

export class ProductFacades {
  products = function(): productInfo[]  {return Products}();
  constructor(){}
}
