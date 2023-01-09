import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsAdditionComponent } from './levels/basic-operations-addition/basic-operations-addition.component';
import { BasicOperationsDivisionComponent } from './levels/basic-operations-division/basic-operations-division.component';
import { BasicOperationsMultiplicationComponent } from './levels/basic-operations-multiplication/basic-operations-multiplication.component';
import { BasicOperationsSubtractionComponent } from './levels/basic-operations-subtraction/basic-operations-subtraction.component';
import { NumberRecognitionOneComponent } from './levels/number-recognition-one/number-recognition-one.component';
import { NumberRecognitionThreeComponent } from './levels/number-recognition-three/number-recognition-three.component';
import { NumberRecognitionTwoComponent } from './levels/number-recognition-two/number-recognition-two.component';
import { PlaceValueComponent } from './levels/place-value/place-value.component';
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
      {
        path: 'levels/number-recognition-two',
        component: NumberRecognitionTwoComponent,
      },
      { path: 'levels/place-value', component: PlaceValueComponent },
      {
        path: 'levels/number-recognition-three',
        component: NumberRecognitionThreeComponent,
      },
      {
        path: 'levels/basic-operations-addition',
        component: BasicOperationsAdditionComponent,
      },
      {
        path: 'levels/basic-operations-subtraction',
        component: BasicOperationsSubtractionComponent,
      },
      {
        path: 'levels/basic-operations-division',
        component: BasicOperationsDivisionComponent,
      },
      {
        path: 'levels/basic-operations-multiplication',
        component: BasicOperationsMultiplicationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumeracyTestRoutingModule {}
