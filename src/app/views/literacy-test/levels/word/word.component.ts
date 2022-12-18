import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ModifyStageArrayData } from 'src/app/models/class/modify-stage-array-data';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { GameService } from 'src/app/services/game.service';
import { selectwordLevelResults } from '../../store/word-level-result/story-level-result.selectors';
import { loadWordLevelResults } from '../../store/word-level-result/word-level-result.actions';
import { WordLevelResultsState } from '../../store/word-level-result/word-level-result.reducer';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent implements OnInit {
  testStageStars: any[] = [];
  letteringStages = [
    {
      id: 1,
      title: 'stage-1',
      rating: 3,
    },
    {
      id: 2,
      title: 'stage-2',
      rating: 2,
    },
    {
      id: 3,
      title: 'stage-3',
      rating: 5,
    },
  ];
  Subscriptions: Subscription[] = [];
  gameLevelResultAndRating: any;
  gameSessionId: any;
  isLoadingStarCards: boolean = false;
  userData$!: Observable<any>;
  constructor(
    private _gameLevelResultAndRatingSvc: GameLevelResultAndRatingService,
    private _gameSvc: GameService,
    private _snackBar: MatSnackBar,
    private store: Store<WordLevelResultsState>
  ) {}

  ngOnInit(): void {
    this.modifyStageArray();
    this.onGetGameSessionId();
  }

  onGetLevelGameResult(GameSessionId: string) {
    this.store.dispatch(loadWordLevelResults({ session_id: GameSessionId }));
    this.userData$ = this.store.pipe(select(selectwordLevelResults));
    this.isLoadingStarCards = true;
    let subscription = this.userData$.subscribe({
      next: (response: any) => {
        if (response) {
          // console.log('LoadWord response>>>: ', response);
          this.gameLevelResultAndRating = response;
          this.modifyStageArray();
          this.isLoadingStarCards = false;
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error**: ', err);
          this.isLoadingStarCards = false;
          new Snackbar(
            'Failed to load stages, please refresh',
            this._snackBar
          ).errorSnackbar();
        }
      },
    });
    this.Subscriptions.push(subscription);
  }

  onGetGameSessionId() {
    let data: any = this._gameSvc.LoadGameSession();
    console.group('data: ', data);
    this.gameSessionId = data?.session_id;
    this.onGetLevelGameResult(this.gameSessionId);
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
