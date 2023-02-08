import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';


@NgModule({
  declarations: [
    ActivityComponent,
    ExerciseComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    SharedModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ActivityModule { }
