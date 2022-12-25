import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelLoaderComponent } from './shared.views/level-loader/level-loader.component';
// import { LevelLoaderComponent } from './views/level-loader/level-loader.component';

const routes: Routes = [
  // { path: 'shared/new-task-loading/:levelTitle/:game-level/:stageNumber', component: LevelLoaderComponent },
  // { path: 'shared/new-task-loading/:game-level/:stageNumber', component: LevelLoaderComponent },
  { path: '', component: LevelLoaderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
