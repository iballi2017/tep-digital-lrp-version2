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
    LetterModule
  ]
})
export class LiteracyTestModule { }
