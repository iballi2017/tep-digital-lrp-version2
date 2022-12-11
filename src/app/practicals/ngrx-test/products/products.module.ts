import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { StoreModule } from '@ngrx/store';
import * as fromProductState from './reducers';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    StoreModule.forFeature(fromProductState.productStateFeatureKey, fromProductState.reducers, { metaReducers: fromProductState.metaReducers })
  ]
})
export class ProductsModule { }
