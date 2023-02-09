import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ExerciseComponent } from './exercise/exercise.component';
import { ActivityComponent } from './activity.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExerciseComponent, ActivityComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    SharedModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ActivityModule {}
