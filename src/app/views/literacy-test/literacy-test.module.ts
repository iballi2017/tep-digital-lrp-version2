import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiteracyTestRoutingModule } from './literacy-test-routing.module';
import { LetterComponent } from './levels/letter/letter.component';
import { LiteracyTestComponent } from './literacy-test.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParagraphComponent } from './levels/paragraph/paragraph.component';
import { WordComponent } from './levels/word/word.component';
import { StoryComponent } from './levels/story/story.component';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { LetterModule } from './levels/letter/letter.module';
import { StoreModule } from '@ngrx/store';
import * as fromLetterLevelResult from './store/letter-level-result/letter-level-result.reducer';
import * as fromWordLevelResult from './store/word-level-result/word-level-result.reducer';
import * as fromParagraphLevelResult from './store/paragraph-level-result/paragraph-level-result.reducer';
import * as fromStoryLevelResult from './store/story-level-result/story-level-result.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LetterLevelResultEffects } from './store/letter-level-result/letter-level-result.effects';
import { ParagraphLevelResultEffects } from './store/paragraph-level-result/paragraph-level-result.effects';
import { StoryLevelResultEffects } from './store/story-level-result/story-level-result.effects';
import { WordLevelResultEffects } from './store/word-level-result/word-level-result.effects';
import { LiteracyLevelCompletionComponent } from './completion/literacy-level-completion/literacy-level-completion.component';
import { LiteracyStageCompletionComponent } from './completion/literacy-stage-completion/literacy-stage-completion.component';
import { LiteracyProgramCompletionComponent } from './completion/literacy-program-completion/literacy-program-completion.component';
import { WordModule } from './levels/word/word.module';


@NgModule({
  declarations: [
    LiteracyTestComponent,
    LetterComponent,
    ParagraphComponent,
    WordComponent,
    StoryComponent,
    LiteracyLevelCompletionComponent,
    LiteracyStageCompletionComponent,
    LiteracyProgramCompletionComponent
  ],
  imports: [
    CommonModule,
    LiteracyTestRoutingModule,
    SharedModule,
    NgMaterialModule,
    LetterModule,
    WordModule,
    SharedModule,
    StoreModule.forFeature(fromLetterLevelResult.letterLevelResultFeatureKey, fromLetterLevelResult.reducer),
    StoreModule.forFeature(fromWordLevelResult.wordLevelResultFeatureKey, fromWordLevelResult.reducer),
    StoreModule.forFeature(fromParagraphLevelResult.paragraphLevelResultFeatureKey, fromParagraphLevelResult.reducer),
    StoreModule.forFeature(fromStoryLevelResult.storyLevelResultFeatureKey, fromStoryLevelResult.reducer),
    EffectsModule.forFeature([LetterLevelResultEffects, ParagraphLevelResultEffects, StoryLevelResultEffects, WordLevelResultEffects])
  ]
})
export class LiteracyTestModule { }
