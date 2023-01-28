import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LetterLevelResultState } from '../views/literacy-test/store/letter-level-result/letter-level-result.reducer';
import {
  isSubmitResultLetterLevelResult,
  letterLevelResultIsLoading,
} from '../views/literacy-test/store/letter-level-result/letter-level-result.selectors';
import { ParagraphLevelResultState } from '../views/literacy-test/store/paragraph-level-result/paragraph-level-result.reducer';
import {
  isSubmitResultParagraphLevelResult,
  paragraphLevelResultIsLoading,
} from '../views/literacy-test/store/paragraph-level-result/paragraph-level-result.selectors';
import { StoryLevelResultState } from '../views/literacy-test/store/story-level-result/story-level-result.reducer';
import {
  isSubmitResultStoryLevelResult,
  storyLevelResultIsLoading,
} from '../views/literacy-test/store/story-level-result/story-level-result.selectors';
import { WordLevelResultState } from '../views/literacy-test/store/word-level-result/word-level-result.reducer';
import {
  isSubmitResultWordLevelResult,
  wordLevelResultIsLoading,
} from '../views/literacy-test/store/word-level-result/word-level-result.selectors';
import { BasicOperationsAdditionLevelResultState } from '../views/numeracy-test/store/basic-operations-addition-level-result/basic-operations-addition-level-result.reducer';
import { isSubmitResultBasicOperationsAdditionLevelResult } from '../views/numeracy-test/store/basic-operations-addition-level-result/basic-operations-addition-level-result.selectors';
import { BasicOperationsDivisionLevelResultState } from '../views/numeracy-test/store/basic-operations-division-level-result/basic-operations-division-level-result.reducer';
import { isSubmitResultBasicOperationsDivisionLevelResult } from '../views/numeracy-test/store/basic-operations-division-level-result/basic-operations-division-level-result.selectors';
import { BasicOperationsMultiplicationLevelResultState } from '../views/numeracy-test/store/basic-operations-multiplication-level-result/basic-operations-multiplication-level-result.reducer';
import { isSubmitResultBasicOperationsMultiplicationLevelResult } from '../views/numeracy-test/store/basic-operations-multiplication-level-result/basic-operations-multiplication-level-result.selectors';
import { BasicOperationsSubtractionLevelResultState } from '../views/numeracy-test/store/basic-operations-subtraction-level-result/basic-operations-subtraction-level-result.reducer';
import { isSubmitResultBasicOperationsSubtractionLevelResult } from '../views/numeracy-test/store/basic-operations-subtraction-level-result/basic-operations-subtraction-level-result.selectors';
import { NumberRecognitionOneLevelResultState } from '../views/numeracy-test/store/number-recognition-one-level-result/number-recognition-one-level-result.reducer';
import { isSubmitResultNumberRecognitionOneLevelResult } from '../views/numeracy-test/store/number-recognition-one-level-result/number-recognition-one-level-result.selectors';
import { NumberRecognitionThreeLevelResultState } from '../views/numeracy-test/store/number-recognition-three-level-result/number-recognition-three-level-result.reducer';
import { isSubmitResultNumberRecognitionThreeLevelResult } from '../views/numeracy-test/store/number-recognition-three-level-result/number-recognition-three-level-result.selectors';
import { NumberRecognitionTwoLevelResultState } from '../views/numeracy-test/store/number-recognition-two-level-result/number-recognition-two-level-result.reducer';
import { isSubmitResultNumberRecognitionTwoLevelResult } from '../views/numeracy-test/store/number-recognition-two-level-result/number-recognition-two-level-result.selectors';
import { PlaceValueLevelResultState } from '../views/numeracy-test/store/place-value-level-result/place-value-level-result.reducer';
import { isSubmitResultPlaceValueLevelResult } from '../views/numeracy-test/store/place-value-level-result/place-value-level-result.selectors';

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
  placeValueResultLoading$!: Observable<boolean>;
  numberRecognitionThreeResultLoading$!: Observable<any>;
  basicOperationsAdditionResultLoading$!: Observable<boolean>;
  basicOperationsSubtractionResultLoading$!: Observable<boolean>;
  basicOperationsMultiplicationResultLoading$!: Observable<boolean>;
  basicOperationsDivisionResultLoading$!: Observable<boolean>;
  Subscriptions: Subscription[] = [];

  constructor(
    private _router: Router,
    private storeLetter: Store<LetterLevelResultState>,
    private storeWord: Store<WordLevelResultState>,
    private storePragraph: Store<ParagraphLevelResultState>,
    private storeStory: Store<StoryLevelResultState>,
    private storeNumberRecognitionOne: Store<NumberRecognitionOneLevelResultState>,
    private storeNumberRecognitionTwo: Store<NumberRecognitionTwoLevelResultState>,
    private storePlaceValue: Store<PlaceValueLevelResultState>,
    private storeNumberRecognitionThree: Store<NumberRecognitionThreeLevelResultState>,
    private storeBasicOperationsAddition: Store<BasicOperationsAdditionLevelResultState>,
    private storeBasicOperationsSubtraction: Store<BasicOperationsSubtractionLevelResultState>,
    private storeBasicOperationsMultiplication: Store<BasicOperationsMultiplicationLevelResultState>,
    private storeBasicOperationsDivision: Store<BasicOperationsDivisionLevelResultState>
  ) {}

  ngOnInit(): void {

    //
    this.letterResultLoading$ = this.storeLetter.pipe(
      select(isSubmitResultLetterLevelResult)
    );
    this.wordResultLoading$ = this.storeWord.pipe(
      select(isSubmitResultWordLevelResult)
    );
    this.paragraphResultLoading$ = this.storePragraph.pipe(
      select(isSubmitResultParagraphLevelResult)
    );
    this.storyResultLoading$ = this.storeStory.pipe(
      select(isSubmitResultStoryLevelResult)
    );
    this.numberRecognitionOneResultLoading$ =
      this.storeNumberRecognitionOne.pipe(
        select(isSubmitResultNumberRecognitionOneLevelResult)
      );
    this.numberRecognitionTwoResultLoading$ =
      this.storeNumberRecognitionTwo.pipe(
        select(isSubmitResultNumberRecognitionTwoLevelResult)
      );
    this.placeValueResultLoading$ = this.storePlaceValue.pipe(
      select(isSubmitResultPlaceValueLevelResult)
    );
    this.numberRecognitionThreeResultLoading$ =
      this.storeNumberRecognitionThree.pipe(
        select(isSubmitResultNumberRecognitionThreeLevelResult)
      );
    this.basicOperationsAdditionResultLoading$ =
      this.storeBasicOperationsAddition.pipe(
        select(isSubmitResultBasicOperationsAdditionLevelResult)
      );
    this.basicOperationsSubtractionResultLoading$ =
      this.storeBasicOperationsSubtraction.pipe(
        select(isSubmitResultBasicOperationsSubtractionLevelResult)
      );
    this.basicOperationsMultiplicationResultLoading$ =
      this.storeBasicOperationsMultiplication.pipe(
        select(isSubmitResultBasicOperationsMultiplicationLevelResult)
      );
    this.basicOperationsDivisionResultLoading$ =
      this.storeBasicOperationsDivision.pipe(
        select(isSubmitResultBasicOperationsDivisionLevelResult)
      );
  }

  // onCheckRouteEvents() {
  //   let subscription = this._router.events.subscribe({
  //     next: (event: any) => {
  //       if (event instanceof NavigationStart) {
  //         // Show progress spinner or progress bar
  //         console.log('event: ', event);
  //         //
  //       }

  //       if (event instanceof NavigationEnd) {
  //         // Hide progress spinner or progress bar
  //         // console.log("event: ", event)
  //         let currentRoute = event.url;
  //         console.log('currentRoute: ', currentRoute);
  //         //
  //         // this._messengerSvc.sendOpenSideNavitionMessageBehaviorSubjet(false);
  //       }

  //       if (event instanceof NavigationError) {
  //         // Hide progress spinner or progress bar

  //         // Present error to user
  //         console.log(event.error);
  //       }
  //     },
  //     error: (err: any) => {
  //       console.warn('Error: ', err);
  //     },
  //   });
  //   this.Subscriptions.push(subscription);
  // }

  // ngOnDestroy(): void {
  //   this.Subscriptions.forEach((x) => {
  //     if (!x.closed) {
  //       x.unsubscribe();
  //     }
  //   });
  // }
}
