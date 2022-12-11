import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloworldStoreRoutingModule } from './helloworld-store-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromHelloworldState from './reducers';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HelloworldStoreRoutingModule,
    StoreModule.forFeature(fromHelloworldState.helloworldStateFeatureKey, fromHelloworldState.reducers, { metaReducers: fromHelloworldState.metaReducers })
  ]
})
export class HelloworldStoreModule { }
