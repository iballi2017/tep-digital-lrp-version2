import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramStarterRoutingModule } from './program-starter-routing.module';
import { ProgramStarterComponent } from './program-starter.component';
import { ProgramSelectionComponent } from './program-selection/program-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestOccupantSelectionComponent } from './components/test-occupant-selection/test-occupant-selection.component';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';

@NgModule({
  declarations: [ProgramStarterComponent, ProgramSelectionComponent, TestOccupantSelectionComponent],
  imports: [
    CommonModule,
    ProgramStarterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule
  ],
})
export class ProgramStarterModule {}
