import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiteracyLevelCompletionComponent } from './completion/literacy-level-completion/literacy-level-completion.component';
import { LiteracyProgramCompletionComponent } from './completion/literacy-program-completion/literacy-program-completion.component';
import { LiteracyStageCompletionComponent } from './completion/literacy-stage-completion/literacy-stage-completion.component';
import { LetterComponent } from './levels/letter/letter.component';
import { ParagraphComponent } from './levels/paragraph/paragraph.component';
import { StoryComponent } from './levels/story/story.component';
import { WordComponent } from './levels/word/word.component';
import { LiteracyTestComponent } from './literacy-test.component';

const routes: Routes = [
  {
    path: '',
    component: LiteracyTestComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'levels/letter' },
      { path: 'levels/letter', component: LetterComponent },
      { path: 'levels/paragraph', component: ParagraphComponent },
      { path: 'levels/word', component: WordComponent },
      { path: 'levels/story', component: StoryComponent },
    ],
  },
  {
    path: 'stage-completion/:game-level/:stage-number',
    // component: LetteringStageCompletionComponent,
    component: LiteracyStageCompletionComponent,
  },
  {
    path: 'level-completion/:game-level',
    // component: LetteringLevelCompletionComponent,
    component: LiteracyLevelCompletionComponent,
  },
  {
    path: 'game-type-completion/:game-level',
    component: LiteracyProgramCompletionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiteracyTestRoutingModule {}
