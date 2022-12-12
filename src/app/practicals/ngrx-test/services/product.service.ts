import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/store/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BaseUrl = 'http://localhost:3000';
  ProductUrl = this.BaseUrl + '/Products';

  constructor(private _http: HttpClient) {}
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

  GetSingleProduct(id:any): Observable<Product> {
    return this._http.get<Product>(`${this.ProductUrl}/${id}`);
  }

  CreateProduct(payload: Product): Observable<Product> {
    return this._http.post<Product>(this.ProductUrl, payload);
  }

  DeleteProduct(ProductId: string) {
    return this._http.delete(`${this.ProductUrl}/${ProductId}`);
  }
}
