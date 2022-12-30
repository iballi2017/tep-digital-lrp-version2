import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AlphabetType } from 'src/app/models/interface/alphabet-type';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { LetterStageThreeService } from 'src/app/services/letter/letter-stage-three.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addLetterLevelStageThreeResult } from 'src/app/views/literacy-test/store/letter-level-result/letter-level-result.actions';
import { LetterLevelResultState } from 'src/app/views/literacy-test/store/letter-level-result/letter-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  boardActivityHint: string = 'Create syllables';
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];

  testList = [
    {
      testName: 'test-1',
      isTestComplete: false,
      testKeys: [
        {
          name: 'f',
          type: AlphabetType.CONSONANT,
          isWrongChoice: false,
        },
        {
          name: 'a',
          type: AlphabetType.VOWEL,
          isWrongChoice: false,
        },
        {
          name: 'm',
          type: AlphabetType.CONSONANT,
          isWrongChoice: false,
        },
      ],
    },
  ];
  previewList: any[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Create four syllables in the yellow boxes above by selecting/joining consonant and vowel letters in the green boxes below.';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 3;
  gameLevel = GameLevel.LETTER;
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<LetterLevelResultState>,
    private _router: Router,
    private _letterStageThreeSvc: LetterStageThreeService
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
    let consonantItems = this.previewList.filter(
      (alphabet: any) => alphabet.type == AlphabetType.CONSONANT
    );
    let vowelItems = this.previewList.filter(
      (alphabet: any) => alphabet.type == AlphabetType.VOWEL
    );

    if (this.previewList.length == 2) {
      if (
        consonantItems.length == this.previewList.length ||
        vowelItems.length == this.previewList.length
      ) {
        for (let i = 0; i < this.previewList.length; i++) {
          this.previewList[i].isWrongChoice = true;
        }
        setTimeout(() => {
          for (let i = 0; i < this.previewList.length; i++) {
            this.previewList[i].isWrongChoice = false;
            this.previewList = [];
          }
          return;
        }, 2000);
      } else {
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
      }
      this.isComplete();
    }
  }

  isComplete() {
    if (this.resultItemList.length == 4) {
      console.warn(
        'this.testList[this.testNumber]: ',
        this.testList[this.testNumber]
      );
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
        this.gameSessionId = msg?.session_id;
      },
    });
  }

  testGameCompletion() {
    this.onCheckTestCompletion();
    if (this.checkTestCompletion.length == this.testList.length) {
      const Payload: ActivityAnswer = {
        session_id: this.gameSessionId,
        answer: '2',
        data: [...this.checkTestCompletion],
      };
      this.store.dispatch(addLetterLevelStageThreeResult({ payload: Payload }));
      this._letterStageThreeSvc.addLetterLevelResultBehaviour.subscribe(
        (msg: any) => {
          console.log('msg: ', msg);
          if (msg) {
            console.log('msg: ', msg);
            this._router.navigate([
              '/literacy/letter/stage-3/activity/exercise-two',
            ]);
            // this._router.navigate([
            //   `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
            // ]);
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
