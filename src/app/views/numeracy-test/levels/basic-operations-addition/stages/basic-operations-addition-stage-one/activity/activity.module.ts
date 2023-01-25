import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ExerciseComponent } from './exercise/exercise.component';
import { ActivityComponent } from './activity.component';


@NgModule({
  declarations: [
    ExerciseComponent,
    ActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
