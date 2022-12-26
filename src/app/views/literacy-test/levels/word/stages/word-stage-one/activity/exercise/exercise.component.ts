import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { WordStageOneService } from 'src/app/services/word/word-stage-one.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addWordLevelStageOneResult } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Create two rhyming words';
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];

  testList = [
    {
      testName: 'test-1',
      isTestComplete: false,
      testKeys: [
        {
          name: 'ca',
          isWrongChoice: false,
          position: 1,
        },
        {
          name: 'n',
          isWrongChoice: false,
          position: 2,
        },
        {
          name: 'pa',
          isWrongChoice: false,
          position: 1,
        },
      ],

      answer: ['can', 'pan'],
    },
  ];
  previewList: any[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Select a syllable and a letter in the green boxes to create two rhyming word in the space above';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 1;
  gameLevel = GameLevel.WORD;
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<WordLevelResultState>,
    private _router: Router,
    private _wordStageOneSvc: WordStageOneService
  ) {}

  ngOnInit(): void {
    this.onReplceKeyList();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();
  }

  onCheckTestCompletion() {
    this.checkTestCompletion = this.testList.filter(
      (test: any) => test.isTestComplete == true
    );
  }

  onReplceKeyList() {
    this.keyList = this.testList[this.testNumber]?.testKeys;
  }

  onSelectAlphabet(alphabet: any) {
    this.previewList.push(alphabet);
    if (this.previewList.length == 2) {
      if (this.previewList[0].position == this.previewList[1].position) {
        for (let i = 0; i < this.previewList.length; i++) {
          this.previewList[i].isWrongChoice = true;
        }
        setTimeout(() => {
          for (let i = 0; i < this.previewList.length; i++) {
            this.previewList[i].isWrongChoice = false;
          }
          this.previewList = [];
          return;
        }, 2000);
        return;
      }
      if (this.previewList[0].position == 2) {
        for (let i = 0; i < this.previewList.length; i++) {
          this.previewList[i].isWrongChoice = true;
        }
        setTimeout(() => {
          for (let i = 0; i < this.previewList.length; i++) {
            this.previewList[i].isWrongChoice = false;
          }
          this.previewList = [];
          return;
        }, 2000);
        return;
      }
      let resultObject = {
        item1: this.previewList[0],
        item2: this.previewList[1],
      };
      for (let i = 0; i < this.resultItemList.length; i++) {
        if (
          this.resultItemList[i].item1 == resultObject.item1 &&
          this.resultItemList[i].item2 == resultObject.item2
        ) {
          alert('item already exist!');
          this.previewList = [];
          return;
        }
      }
      this.resultItemList.push(resultObject);
      this.previewList = [];
      this.isComplete();
    }
  }

  isComplete() {
    if (this.resultItemList.length == 2) {
      this.testList[this.testNumber].isTestComplete = true;
      this.testGameCompletion();
    } else {
      return;
    }
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe({
      next: (msg: any) => {
        this.gameSessionId = msg?.id;
      },
    });
  }

  testGameCompletion() {
    this.onCheckTestCompletion();
    if (this.checkTestCompletion.length == this.testList.length) {
      const Payload: ActivityAnswer = {
        session_id: this.gameSessionId,
        answer: '4',
        data: [...this.checkTestCompletion],
      };
      this.store.dispatch(addWordLevelStageOneResult({ payload: Payload }));
      this._wordStageOneSvc.addWordLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            // console.log('msg: ', msg);
            this._router.navigate([
              `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
            ]);
          }
        }
      );
    }
    return;
  }

  onReadHint() {
    this.dialog.open(ActivityHintDialogComponent, {
      width: '100%',
      maxWidth: '445px',
      data: {
        hint: this.activityHint,
      },
    });
  }

  refreshGame() {
    this.resultItemList = [];
    this.testNumber = 0;
    this.onReplceKeyList();
    for (let i = 0; i < this.testList.length; i++) {
      this.testList[i].isTestComplete = false;
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
