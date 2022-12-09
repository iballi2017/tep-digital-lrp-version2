import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberRecognitionOneComponent } from './levels/number-recognition-one/number-recognition-one.component';
import { NumeracyTestComponent } from './numeracy-test.component';

const routes: Routes = [
  {
    path: '',
    component: NumeracyTestComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'levels/number-recognition-one',
      },
      {
        path: 'levels/number-recognition-one',
        component: NumberRecognitionOneComponent,
      },
      // {
      //   path: 'levels/number-recognition-two',
      //   component: NumberRecognitionTwoComponent,
      // },
      // { path: 'levels/place-value', component: PlaceValueComponent },
      // {
      //   path: 'levels/number-recognition-three',
      //   component: NumberRecognitionThreeComponent,
      // },
      // {
      //   path: 'levels/basic-operations-addition',
      //   component: BasicOperationsAdditionComponent,
      // },
      // {
      //   path: 'levels/basic-operations-subtraction',
      //   component: BasicOperationsSubtractionComponent,
      // },
      // {
      //   path: 'levels/basic-operations-division',
      //   component: BasicOperationsDivisionComponent,
      // },
      // {
      //   path: 'levels/basic-operations-multiplication',
      //   component: BasicOperationsMultiplicationComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumeracyTestRoutingModule {}
