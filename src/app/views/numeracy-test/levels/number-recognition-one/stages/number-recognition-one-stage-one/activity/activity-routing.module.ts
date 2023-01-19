import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityComponent,
    children: [
      { path: '', component: ExerciseComponent },
      { path: 'exercise', component: ExerciseComponent },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
