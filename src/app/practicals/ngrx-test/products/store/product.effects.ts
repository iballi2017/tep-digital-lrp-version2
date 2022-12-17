import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { ProductService } from '../../services/product.service';
import * as fromProductActions from './product.actions';

@Injectable()
export class ProductEffects {
  createProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromProductActions.addProduct),
      mergeMap((action: any) =>
        this._productSvc.CreateProduct(action.product).pipe(
          map((product: any) =>
            fromProductActions.addProductSuccess({ product })
          ),
          catchError((error: any) =>
            of(fromProductActions.addProductFailure({ error }))
          )
        )
      ),
      tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromProductActions.loadProducts),
      mergeMap((action: any) =>
        this._productSvc.GetProducts().pipe(
          map((products: any) => {
            console.group("products effect: ", products)
            return fromProductActions.loadProductsSuccess({ products });
          }),
          catchError((error: any) =>
            of(fromProductActions.loadProductsFailure({ error }))
          )
        )
      ),
      tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  loadSingleProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromProductActions.loadSingleProduct),
      mergeMap((action: any) =>
        this._productSvc.GetSingleProduct(action.id).pipe(
          map((product: any) =>
            fromProductActions.loadSingleProductSuccess({
              selectedProduct: product,
            })
          ),
          catchError((error: any) =>
            of(fromProductActions.loadSingleProductFailure({ error }))
          )
        )
      ),
      tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromProductActions.deleteProduct),
      mergeMap((action: any) =>
        this._productSvc.GetSingleProduct(action.id).pipe(
          map((product: any) =>
            fromProductActions.deleteProductSuccess({ id: action.id })
          ),
          catchError((error: any) =>
            of(fromProductActions.deleteProductFailure({ error }))
          )
        )
      ),
      tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });
  constructor(
    private actions$: Actions,
    private _productSvc: ProductService,
    private _router: Router
  ) {}
}
