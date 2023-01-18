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
import { NumeracyLevelCompletionComponent } from './completion/numeracy-level-completion/numeracy-level-completion.component';
import { NumeracyProgramCompletionComponent } from './completion/numeracy-program-completion/numeracy-program-completion.component';
import { NumeracyStageCompletionComponent } from './completion/numeracy-stage-completion/numeracy-stage-completion.component';
import { NumberRecognitionOneModule } from './levels/number-recognition-one/number-recognition-one.module';
import { StoreModule } from '@ngrx/store';
import * as fromNumberRecognitionOneLevelResult from './store/number-recognition-one-level-result/number-recognition-one-level-result.reducer';
import * as fromNumberRecognitionTwoLevelResult from './store/number-recognition-two-level-result/number-recognition-two-level-result.reducer';
import * as fromNumberRecognitionThreeLevelResult from './store/number-recognition-three-level-result/number-recognition-three-level-result.reducer';
import * as fromPlaceValueLevelResult from './store/place-value-level-result/place-value-level-result.reducer';
import * as fromBasicOperationsAdditionLevelResult from './store/basic-operations-addition-level-result/basic-operations-addition-level-result.reducer';
import * as fromBasicOperationsSubtractionLevelResult from './store/basic-operations-subtraction-level-result/basic-operations-subtraction-level-result.reducer';
import * as fromBasicOperationsMultiplicationLevelResult from './store/basic-operations-multiplication-level-result/basic-operations-multiplication-level-result.reducer';
import * as fromBasicOperationsDivisionLevelResult from './store/basic-operations-division-level-result/basic-operations-division-level-result.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NumberRecognitionOneLevelResultEffects } from './store/number-recognition-one-level-result/number-recognition-one-level-result.effects';
import { NumberRecognitionTwoLevelResultEffects } from './store/number-recognition-two-level-result/number-recognition-two-level-result.effects';
import { NumberRecognitionThreeLevelResultEffects } from './store/number-recognition-three-level-result/number-recognition-three-level-result.effects';
import { BasicOperationsAdditionLevelResultEffects } from './store/basic-operations-addition-level-result/basic-operations-addition-level-result.effects';
import { BasicOperationsSubtractionLevelResultEffects } from './store/basic-operations-subtraction-level-result/basic-operations-subtraction-level-result.effects';
import { BasicOperationsDivisionLevelResultEffects } from './store/basic-operations-division-level-result/basic-operations-division-level-result.effects';
import { BasicOperationsMultiplicationLevelResultEffects } from './store/basic-operations-multiplication-level-result/basic-operations-multiplication-level-result.effects';
import { PlaceValueLevelResultEffects } from './store/place-value-level-result/place-value-level-result.effects';
@NgModule({
  declarations: [
    NumeracyTestComponent,
    NumberRecognitionOneComponent,
    NumberRecognitionTwoComponent,
    NumberRecognitionThreeComponent,
    PlaceValueComponent,
    BasicOperationsAdditionComponent,
    BasicOperationsSubtractionComponent,
    BasicOperationsDivisionComponent,
    BasicOperationsMultiplicationComponent,
    NumeracyLevelCompletionComponent,
    NumeracyProgramCompletionComponent,
    NumeracyStageCompletionComponent,
  ],
  imports: [
    CommonModule,
    NumeracyTestRoutingModule,
    SharedModule,
    NgMaterialModule,
    NumberRecognitionOneModule,
    StoreModule.forFeature(fromNumberRecognitionOneLevelResult.numberRecognitionOneLevelResultsFeatureKey, fromNumberRecognitionOneLevelResult.reducer),
    StoreModule.forFeature(fromNumberRecognitionTwoLevelResult.numberRecognitionTwoLevelResultsFeatureKey, fromNumberRecognitionTwoLevelResult.reducer),
    StoreModule.forFeature(fromNumberRecognitionThreeLevelResult.numberRecognitionThreeLevelResultsFeatureKey, fromNumberRecognitionThreeLevelResult.reducer),
    StoreModule.forFeature(fromPlaceValueLevelResult.placeValueLevelResultsFeatureKey, fromPlaceValueLevelResult.reducer),
    StoreModule.forFeature(fromBasicOperationsAdditionLevelResult.basicOperationsAdditionLevelResultsFeatureKey, fromBasicOperationsAdditionLevelResult.reducer),
    StoreModule.forFeature(fromBasicOperationsSubtractionLevelResult.basicOperationsSubtractionLevelResultsFeatureKey, fromBasicOperationsSubtractionLevelResult.reducer),
    StoreModule.forFeature(fromBasicOperationsMultiplicationLevelResult.basicOperationsMultiplicationLevelResultsFeatureKey, fromBasicOperationsMultiplicationLevelResult.reducer),
    StoreModule.forFeature(fromBasicOperationsDivisionLevelResult.basicOperationsDivisionLevelResultsFeatureKey, fromBasicOperationsDivisionLevelResult.reducer),
    EffectsModule.forFeature([NumberRecognitionOneLevelResultEffects, NumberRecognitionTwoLevelResultEffects, NumberRecognitionThreeLevelResultEffects, BasicOperationsAdditionLevelResultEffects, BasicOperationsSubtractionLevelResultEffects, BasicOperationsDivisionLevelResultEffects, BasicOperationsMultiplicationLevelResultEffects, PlaceValueLevelResultEffects])
  ],
})
export class NumeracyTestModule {}
