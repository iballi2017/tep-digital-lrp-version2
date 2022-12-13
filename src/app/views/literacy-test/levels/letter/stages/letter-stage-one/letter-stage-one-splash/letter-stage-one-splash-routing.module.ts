import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetterStageOneInstructionalVideoComponent } from './letter-stage-one-instructional-video/letter-stage-one-instructional-video.component';
import { LetterStageOneSplashComponent } from './letter-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: LetterStageOneSplashComponent,
    children: [
      { path: '', component: LetterStageOneInstructionalVideoComponent },
      {
        path: 'interlude',
        component: LetterStageOneInstructionalVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetterStageOneSplashRoutingModule {}
