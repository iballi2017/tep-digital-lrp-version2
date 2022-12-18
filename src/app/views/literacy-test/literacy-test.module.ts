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


@NgModule({
  declarations: [
    LiteracyTestComponent,
    LetterComponent,
    ParagraphComponent,
    WordComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    LiteracyTestRoutingModule,
    SharedModule,
    NgMaterialModule,
    LetterModule,
    StoreModule.forFeature(fromLetterLevelResult.letterLevelResultsFeatureKey, fromLetterLevelResult.reducer),
    StoreModule.forFeature(fromWordLevelResult.wordLevelResultsFeatureKey, fromWordLevelResult.reducer),
    StoreModule.forFeature(fromParagraphLevelResult.paragraphLevelResultsFeatureKey, fromParagraphLevelResult.reducer),
    StoreModule.forFeature(fromStoryLevelResult.storyLevelResultsFeatureKey, fromStoryLevelResult.reducer),
    EffectsModule.forFeature([LetterLevelResultEffects, ParagraphLevelResultEffects, StoryLevelResultEffects, WordLevelResultEffects])
  ]
})
export class LiteracyTestModule { }
