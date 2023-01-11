import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxTestComponent } from './ngrx-test/ngrx-test.component';
import { PracticalsComponent } from './practicals.component';
import { ResponsiveWebpagesComponent } from './responsive-webpages/responsive-webpages.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ngrx' },
  {
    path: 'ngrx',
    loadChildren: () =>
      import('./ngrx-test/ngrx-test.module').then((m) => m.NgrxTestModule),
  },
  {
    path: 'responsive-pages',
    loadChildren: () =>
      import('./responsive-webpages/responsive-webpages.module').then(
        (m) => m.ResponsiveWebpagesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticalsRoutingModule {}
