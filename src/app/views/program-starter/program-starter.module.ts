import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramStarterRoutingModule } from './program-starter-routing.module';
import { ProgramStarterComponent } from './program-starter.component';
import { ProgramSelectionComponent } from './program-selection/program-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProgramStarterComponent, ProgramSelectionComponent],
  imports: [
    CommonModule,
    ProgramStarterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProgramStarterModule {}
