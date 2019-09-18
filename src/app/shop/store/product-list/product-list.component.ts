import { Component, OnInit,Input } from '@angular/core';

import {ProductService} from '../../shared/product.service';

import {AngularFirestore} from "@angular/fire/firestore";
import { Store} from '../../models/store';
import { Observable } from 'rxjs';
import { isObservable } from "rxjs";
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() store: Observable<Store>;
  @Input() canEdit:boolean;
  productList: any;
  products: [];
  constructor(
    private productService:ProductService,) { 
    }
    
  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });    
  }
  
  updateProduct() {
    this.productService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
  }

}