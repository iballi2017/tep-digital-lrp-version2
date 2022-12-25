import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetterStageTwoInstructionalVideoComponent } from './letter-stage-two-instructional-video/letter-stage-two-instructional-video.component';
import { LetterStageTwoSplashComponent } from './letter-stage-two-splash.component';

const routes: Routes = [
  {
    path: '',
    component: LetterStageTwoSplashComponent,
    children: [
      { path: '', component: LetterStageTwoInstructionalVideoComponent },
      {
        path: 'interlude',
        component: LetterStageTwoInstructionalVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetterStageTwoSplashRoutingModule {}
