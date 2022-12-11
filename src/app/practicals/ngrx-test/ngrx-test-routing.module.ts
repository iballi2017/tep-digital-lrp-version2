import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxTestComponent } from './ngrx-test.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: NgrxTestComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'products' },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxTestRoutingModule { }
