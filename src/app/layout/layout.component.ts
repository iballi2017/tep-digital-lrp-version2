import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LetterLevelResultState } from '../views/literacy-test/store/letter-level-result/letter-level-result.reducer';
import { isSubmitResultLetterLevelResult, letterLevelResultIsLoading } from '../views/literacy-test/store/letter-level-result/letter-level-result.selectors';
import { ParagraphLevelResultState } from '../views/literacy-test/store/paragraph-level-result/paragraph-level-result.reducer';
import { isSubmitResultParagraphLevelResult, paragraphLevelResultIsLoading } from '../views/literacy-test/store/paragraph-level-result/paragraph-level-result.selectors';
import { StoryLevelResultState } from '../views/literacy-test/store/story-level-result/story-level-result.reducer';
import { isSubmitResultStoryLevelResult, storyLevelResultIsLoading } from '../views/literacy-test/store/story-level-result/story-level-result.selectors';
import { WordLevelResultState } from '../views/literacy-test/store/word-level-result/word-level-result.reducer';
import { isSubmitResultWordLevelResult, wordLevelResultIsLoading } from '../views/literacy-test/store/word-level-result/word-level-result.selectors';
import { NumberRecognitionOneLevelResultState } from '../views/numeracy-test/store/number-recognition-one-level-result/number-recognition-one-level-result.reducer';
import { isSubmitResultNumberRecognitionOneLevelResult } from '../views/numeracy-test/store/number-recognition-one-level-result/number-recognition-one-level-result.selectors';
import { NumberRecognitionTwoLevelResultState } from '../views/numeracy-test/store/number-recognition-two-level-result/number-recognition-two-level-result.reducer';
import { isSubmitResultNumberRecognitionTwoLevelResult } from '../views/numeracy-test/store/number-recognition-two-level-result/number-recognition-two-level-result.selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  letterResultLoading$!: Observable<any>;
  wordResultLoading$!: Observable<any>;
  paragraphResultLoading$!: Observable<any>;
  storyResultLoading$!: Observable<any>;
  numberRecognitionOneResultLoading$!: Observable<boolean>;
  numberRecognitionTwoResultLoading$!: Observable<any>;
  
  constructor(
    private storeLetter: Store<LetterLevelResultState>,
    private storeWord: Store<WordLevelResultState>,
    private storePragraph: Store<ParagraphLevelResultState>,
    private storeStory: Store<StoryLevelResultState>,
    private storeNumberRecognitionOne: Store<NumberRecognitionOneLevelResultState>,
    private storeNumberRecognitionTwo: Store<NumberRecognitionTwoLevelResultState>) {}

  ngOnInit(): void {
    this.letterResultLoading$ = this.storeLetter.pipe(
      select(isSubmitResultLetterLevelResult)
    );
    this.wordResultLoading$ = this.storeWord.pipe(select(isSubmitResultWordLevelResult));
    this.paragraphResultLoading$ = this.storePragraph.pipe(select(isSubmitResultParagraphLevelResult));
    this.storyResultLoading$ = this.storeStory.pipe(select(isSubmitResultStoryLevelResult));
    this.numberRecognitionOneResultLoading$ = this.storeNumberRecognitionOne.pipe(select(isSubmitResultNumberRecognitionOneLevelResult));
    this.numberRecognitionTwoResultLoading$ = this.storeNumberRecognitionTwo.pipe(select(isSubmitResultNumberRecognitionTwoLevelResult));
  }
}
