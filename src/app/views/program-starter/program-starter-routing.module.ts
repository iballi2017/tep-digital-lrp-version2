import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramSelectionComponent } from './program-selection/program-selection.component';
import { ProgramStarterComponent } from './program-starter.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramStarterComponent,
    children: [
      { path: '', component: ProgramSelectionComponent },
      // { path: 'category-options', component: QuestionCategoryOptionsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramStarterRoutingModule {}
