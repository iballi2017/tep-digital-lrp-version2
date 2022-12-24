import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramStarterRoutingModule } from './program-starter-routing.module';
import { ProgramStarterComponent } from './program-starter.component';
import { ProgramSelectionComponent } from './program-selection/program-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestOccupantSelectionComponent } from './components/test-occupant-selection/test-occupant-selection.component';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OccupantListEffects } from '../user-account/store/occupant-list/occupant-list.effects';
import * as fromOccupantList from '../user-account/store/occupant-list/occupant-list.reducer';

@NgModule({
  declarations: [ProgramStarterComponent, ProgramSelectionComponent, TestOccupantSelectionComponent],
  imports: [
    CommonModule,
    ProgramStarterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    EffectsModule.forFeature([OccupantListEffects]),
    StoreModule.forFeature(fromOccupantList.occupantListFeatureKey, fromOccupantList.reducer),
  ],
})
export class ProgramStarterModule { }
