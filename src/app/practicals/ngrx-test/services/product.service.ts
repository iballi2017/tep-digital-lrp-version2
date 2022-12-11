import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BaseUrl = "http://localhost:3000";
  ProductUrl = this.BaseUrl + '/Products'

  constructor(private _http: HttpClient) { }
  GetProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.ProductUrl);

    //  .subscribe({
    //     next: (products: any) => {
    //       if (products) {
    //         this.list = products
    //         console.group("this.list: ", this.list)
    //       }
    //     },
    //     error: (err: any) => {
    //       if (err) {
    //         console.warn("Error: ", err)
    //       }
    //     }
    //   })
  }
}


export interface Product {
  id?: number,
  title: string,
  price: string | number
}