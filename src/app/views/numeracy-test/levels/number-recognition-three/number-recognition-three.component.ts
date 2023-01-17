import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ModifyStageArrayData } from 'src/app/models/class/modify-stage-array-data';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameService } from 'src/app/services/game.service';
import { loadNumberRecognitionThreeLevelResult } from '../../store/number-recognition-three-level-result/number-recognition-three-level-result.actions';
import { NumberRecognitionThreeLevelResult } from '../../store/number-recognition-three-level-result/number-recognition-three-level-result.model';
import { numberRecognitionThreeLevelResultIsLoading, selectNumberRecognitionThreeLevelResult } from '../../store/number-recognition-three-level-result/number-recognition-two-level-result.selectors';

@Component({
  selector: 'app-number-recognition-three',
  templateUrl: './number-recognition-three.component.html',
  styleUrls: ['./number-recognition-three.component.scss']
})
export class NumberRecognitionThreeComponent implements OnInit {
  testStageStars: any[] = [];
  Subscriptions: Subscription[] = [];
  gameLevelResultAndRating: any;
  gameSessionId: any;
  isLoadingStarCards!: boolean;
  userData$!: Observable<any>;
  constructor(
    private _gameSvc: GameService,
    private _snackBar: MatSnackBar,
    private store: Store<NumberRecognitionThreeLevelResult>
  ) {}

  ngOnInit(): void {
    let letterResultLoading$: Observable<any> = this.store.pipe(
      select(numberRecognitionThreeLevelResultIsLoading)
    );
    letterResultLoading$.subscribe((data: any) => {
      this.isLoadingStarCards = data;
    });
    this.userData$ = this.store.pipe(select(selectNumberRecognitionThreeLevelResult));
    this.modifyStageArray();
    this.onGetGameSessionId();
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe((msg: any) => {
      // console.log('msg: ', msg);
      this.gameSessionId = msg.session_id;
      this.onGetGameLevelResult(this.gameSessionId);
    });
  }

  onGetGameLevelResult(GameSessionId: string) {
    this.store.dispatch(loadNumberRecognitionThreeLevelResult({ session_id: GameSessionId }));
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
