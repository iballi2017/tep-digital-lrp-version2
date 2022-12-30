import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ModifyStageArrayData } from 'src/app/models/class/modify-stage-array-data';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { GameService } from 'src/app/services/game.service';
import { selectWordLevelResult, wordLevelResultIsLoading } from '../../store/word-level-result/word-level-result.selectors';
import { loadWordLevelResult } from '../../store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from '../../store/word-level-result/word-level-result.reducer';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent implements OnInit {
  testStageStars: any[] = [];
  Subscriptions: Subscription[] = [];
  gameLevelResultAndRating: any;
  gameSessionId: any;
  isLoadingStarCards: boolean = false;
  userData$!: Observable<any>;
  constructor(
    private _gameSvc: GameService,
    private _snackBar: MatSnackBar,
    private store: Store<WordLevelResultState>
  ) {}

  ngOnInit(): void {
    this.userData$ = this.store.pipe(select(selectWordLevelResult));
    this.modifyStageArray();
    this.onGetGameSessionId();
    
    let wordLevelResultIsLoading$: Observable<any> = this.store.pipe(select(wordLevelResultIsLoading));
    wordLevelResultIsLoading$.subscribe((data: any) => {
      this.isLoadingStarCards = data;
    });
  }

  
  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe((msg: any) => {
      this.gameSessionId = msg.session_id
      this.onGetGameLevelResult(this.gameSessionId);
    })
  }

  onGetGameLevelResult(GameSessionId: string) {
    this.store.dispatch(loadWordLevelResult({ session_id: GameSessionId }));
    let subscription = this.userData$.subscribe({
      next: (response: any) => {
        if (response) {
          // console.log('LoadWord response>>>: ', response);
          this.gameLevelResultAndRating = response;
          this.modifyStageArray();
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error**: ', err);
          new Snackbar(
            'Failed to load stages, please refresh',
            this._snackBar
          ).errorSnackbar();
        }
      },
    });
    this.Subscriptions.push(subscription);
  }


  modifyStageArray() {
    if (this.gameLevelResultAndRating) {
      let x = new ModifyStageArrayData(this.gameLevelResultAndRating);
      this.testStageStars = x.modifyStageArray();
    }
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
