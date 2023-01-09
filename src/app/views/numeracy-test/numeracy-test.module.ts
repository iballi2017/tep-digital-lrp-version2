import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumeracyTestRoutingModule } from './numeracy-test-routing.module';
import { NumeracyTestComponent } from './numeracy-test.component';
import { NumberRecognitionOneComponent } from './levels/number-recognition-one/number-recognition-one.component';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NumberRecognitionTwoComponent } from './levels/number-recognition-two/number-recognition-two.component';
import { NumberRecognitionThreeComponent } from './levels/number-recognition-three/number-recognition-three.component';
import { PlaceValueComponent } from './levels/place-value/place-value.component';
import { BasicOperationsAdditionComponent } from './levels/basic-operations-addition/basic-operations-addition.component';
import { BasicOperationsSubtractionComponent } from './levels/basic-operations-subtraction/basic-operations-subtraction.component';
import { BasicOperationsDivisionComponent } from './levels/basic-operations-division/basic-operations-division.component';
import { BasicOperationsMultiplicationComponent } from './levels/basic-operations-multiplication/basic-operations-multiplication.component';
@NgModule({
  declarations: [NumeracyTestComponent, NumberRecognitionOneComponent, NumberRecognitionTwoComponent, NumberRecognitionThreeComponent, PlaceValueComponent, BasicOperationsAdditionComponent, BasicOperationsSubtractionComponent, BasicOperationsDivisionComponent, BasicOperationsMultiplicationComponent],
  imports: [
    CommonModule,
    NumeracyTestRoutingModule,
    SharedModule,
    NgMaterialModule,
  ],
})
export class NumeracyTestModule {}
