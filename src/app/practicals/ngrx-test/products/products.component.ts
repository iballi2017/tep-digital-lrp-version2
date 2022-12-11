import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductService } from '../services/product.service';
import { ProductState } from './store';
import * as fromActions from "../products/store/product.actions";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  list: any[] = []
  constructor(private _productSvc: ProductService, private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.GetProducts()
  }

  GetProducts() {
    this.store.dispatch(fromActions.loadProducts());
    this._productSvc.GetProducts().subscribe({
      next: (products: any) => {
        if (products) {
          this.list = products
          console.group("this.list: ", this.list)
          this.store.dispatch(fromActions.loadProductsSuccess({ data: this.list }));
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn("Error: ", err)
          this.store.dispatch(fromActions.loadProductsFailure({ error: err }));
        }
      }
    })
  }

}
