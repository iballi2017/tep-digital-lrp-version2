import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ModifyStageArrayData } from 'src/app/models/class/modify-stage-array-data';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { GameService } from 'src/app/services/game.service';
import { loadParagraphLevelResult } from '../../store/paragraph-level-result/paragraph-level-result.actions';
import { ParagraphLevelResultState } from '../../store/paragraph-level-result/paragraph-level-result.reducer';
import {
  paragraphLevelResultIsLoading,
  paragraphLevelResult,
} from '../../store/paragraph-level-result/paragraph-level-result.selectors';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
})
export class ParagraphComponent implements OnInit {
  testStageStars: any[] = [];
  Subscriptions: Subscription[] = [];
  gameLevelResultAndRating: any;
  gameSessionId: any;
  userData$!: Observable<any>;
  isLoadingStarCards: any;
  constructor(
    private _gameLevelResultAndRatingSvc: GameLevelResultAndRatingService,
    private _gameSvc: GameService,
    private _snackBar: MatSnackBar,
    private store: Store<ParagraphLevelResultState>
  ) {}

  ngOnInit(): void {
    this.modifyStageArray();
    this.onGetGameSessionId();

    let paragraphLevelResultIsLoading$: Observable<any> = this.store.pipe(
      select(paragraphLevelResultIsLoading)
    );
    paragraphLevelResultIsLoading$.subscribe((data: any) => {
      this.isLoadingStarCards = data;
    });
  }

  onGetGameLevelResult(GameSessionId: string) {
    this.store.dispatch(
      loadParagraphLevelResult({ session_id: GameSessionId })
    );
    this.userData$ = this.store.pipe(select(paragraphLevelResult));
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
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe((msg: any) => {
      this.gameSessionId = msg.session_id;
      this.onGetGameLevelResult(this.gameSessionId);
    });
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
