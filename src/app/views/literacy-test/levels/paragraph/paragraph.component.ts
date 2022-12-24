import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ModifyStageArrayData } from 'src/app/models/class/modify-stage-array-data';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { GameService } from 'src/app/services/game.service';
import { loadParagraphLevelResults } from '../../store/paragraph-level-result/paragraph-level-result.actions';
import { ParagraphLevelResultsState } from '../../store/paragraph-level-result/paragraph-level-result.reducer';
import { selectParagraphLevelResults } from '../../store/paragraph-level-result/paragraph-level-result.selectors';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
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
  userData$!: Observable<any>;
  constructor(
    private _gameLevelResultAndRatingSvc: GameLevelResultAndRatingService,
    private _gameSvc: GameService,
    private _snackBar: MatSnackBar,
    private store: Store<ParagraphLevelResultsState>
  ) {}

  ngOnInit(): void {
    this.modifyStageArray();
    this.onGetGameSessionId();
  }

  onGetLevelGameResult(GameSessionId: string) {
    this.store.dispatch(loadParagraphLevelResults({ session_id: GameSessionId }));
    this.userData$ = this.store.pipe(select(selectParagraphLevelResults));
    let subscription = this.userData$.subscribe({
        next: (response: any) => {
          if (response) {
            this.gameLevelResultAndRating = response;
            this.modifyStageArray();
          }
        },
        error: (err: any) => {
          if (err) {
            console.warn('Error**: ', err);
            new Snackbar("Failed to load stages, please refresh", this._snackBar).errorSnackbar();
          }
        },
      });
    this.Subscriptions.push(subscription);
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe((msg: any) => {
      this.gameSessionId = msg.session_id
      this.onGetLevelGameResult(this.gameSessionId);
    })
  }

  modifyStageArray() {
    if(this.gameLevelResultAndRating){
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
