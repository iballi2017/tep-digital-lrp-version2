import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetterComponent } from './levels/letter/letter.component';
import { LiteracyTestComponent } from './literacy-test.component';

const routes: Routes = [
  {
    path: '',
    component: LiteracyTestComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'levels/letter' },
      { path: 'levels/letter', component: LetterComponent },
      // { path: 'levels/paragraph', component: ParagraphComponent },
      // { path: 'levels/word', component: WordComponent },
      // { path: 'levels/story', component: StoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiteracyTestRoutingModule {}
