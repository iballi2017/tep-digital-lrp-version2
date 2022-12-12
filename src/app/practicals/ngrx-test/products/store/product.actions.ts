import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Product } from './product.model';

// LOAD PRODUCTS BEGINS
export const loadProducts = createAction('[Product Component] Load Products');

export const loadProductsSuccess = createAction(
  '[Product Load Effect] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product Load Effect] Load Products Failure',
  props<{ error: any }>()
);

// LOAD PRODUCTS ENDS

// LOAD SINGLE PRODUCT BEGINS
export const loadSingleProduct = createAction(
  '[Single Product Component] Load Products',
  props<{ id: string }>()
);

export const loadSingleProductSuccess = createAction(
  '[Single Product Load Effect] Load Single Product Success',
  props<{ selectedProduct: Product }>()
);

export const loadSingleProductFailure = createAction(
  '[Single Product Load Effect] Load Single Product Failure',
  props<{ error: any }>()
);

// LOAD SINGLE PRODUCT ENDS

// ADD PRODUCT BEGINS
export const addProduct = createAction(
  '[Product Add Component] Add Product',
  props<{ product: Product }>()
);
export const addProductSuccess = createAction(
  '[Product Add Effect] Add Product Success',
  props<{ product: Product }>()
);
export const addProductFailure = createAction(
  '[Product Add Effect] Add Product Failure',
  props<{ error: any }>()
);
// ADD PRODUCT ENDS

export const upsertProduct = createAction(
  '[Product/API] Upsert Product',
  props<{ product: Product }>()
);

// export const addProducts = createAction(
//   '[Product/API] Add Products',
//   props<{ products: Product[] }>()
// );

export const upsertProducts = createAction(
  '[Product/API] Upsert Products',
  props<{ products: Product[] }>()
);

export const updateProduct = createAction(
  '[Product/API] Update Product',
  props<{ product: Update<Product> }>()
);

export const updateProducts = createAction(
  '[Product/API] Update Products',
  props<{ products: Update<Product>[] }>()
);

// DELETE PRODUCT BEGINS
export const deleteProduct = createAction(
  '[Product Components] Delete Product',
  props<{ id: string }>()
);

export const deleteProductSuccess = createAction(
  '[Product Delete Effect] Delete Product',
  props<{ id: string }>()
);

export const deleteProductFailure = createAction(
  '[Product Delete Effect] Delete Product',
  props<{ error: any }>()
);
// DELETE PRODUCT ENDS

// export const deleteProducts = createAction(
//   '[Product/API] Delete Products',
//   props<{ ids: string[] }>()
// );

export const clearProducts = createAction('[Product/API] Clear Products');
