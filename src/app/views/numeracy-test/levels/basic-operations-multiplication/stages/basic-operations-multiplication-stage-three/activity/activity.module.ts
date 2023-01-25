import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ActivityComponent,
    ExerciseComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    SharedModule
  ]
})
export class ActivityModule { }
