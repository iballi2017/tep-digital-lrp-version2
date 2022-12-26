import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  declarations: [ActivityComponent, ExerciseComponent],
  imports: [CommonModule, ActivityRoutingModule, SharedModule],
})
export class ActivityModule {}
