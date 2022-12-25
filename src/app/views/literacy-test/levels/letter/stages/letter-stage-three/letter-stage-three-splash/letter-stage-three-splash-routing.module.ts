import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetterStageThreeInstructionalVideoComponent } from './letter-stage-three-instructional-video/letter-stage-three-instructional-video.component';
import { LetterStageThreeSplashComponent } from './letter-stage-three-splash.component';

const routes: Routes = [
  {
    path: '',
    component: LetterStageThreeSplashComponent,
    children: [
      { path: '', component: LetterStageThreeInstructionalVideoComponent },
      {
        path: 'interlude',
        component: LetterStageThreeInstructionalVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetterStageThreeSplashRoutingModule {}
