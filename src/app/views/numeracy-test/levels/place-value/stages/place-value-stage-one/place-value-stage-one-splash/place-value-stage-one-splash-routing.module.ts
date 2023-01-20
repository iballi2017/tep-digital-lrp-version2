import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceValueStageOneInstructionalVideoComponent } from './place-value-stage-one-instructional-video/place-value-stage-one-instructional-video.component';
import { PlaceValueStageOneSplashComponent } from './place-value-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: PlaceValueStageOneSplashComponent,
    children: [
      {
        path: '',
        component: PlaceValueStageOneInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: PlaceValueStageOneInstructionalVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceValueStageOneSplashRoutingModule {}
