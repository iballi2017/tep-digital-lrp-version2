import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxTestComponent } from './ngrx-test/ngrx-test.component';
import { PracticalsComponent } from './practicals.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ngrx' },
  {
    path: 'ngrx',
    loadChildren: () =>
      import('./ngrx-test/ngrx-test.module').then(
        (m) => m.NgrxTestModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticalsRoutingModule { }
