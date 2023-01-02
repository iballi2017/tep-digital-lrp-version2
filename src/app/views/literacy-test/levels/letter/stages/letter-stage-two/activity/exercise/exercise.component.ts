import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { AlphabetType } from 'src/app/models/interface/alphabet-type';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { LetterStageTwoService } from 'src/app/services/letter/letter-stage-two.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addLetterLevelStageTwoResult } from 'src/app/views/literacy-test/store/letter-level-result/letter-level-result.actions';
import { LetterLevelResultState } from 'src/app/views/literacy-test/store/letter-level-result/letter-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Reveal the hidden vowel letters';
  CONSONANT = AlphabetType.CONSONANT;
  VOWEL = AlphabetType.VOWEL;
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];

  testList = [
    {
      testName: 'test-1',
      isTestComplete: false,
      testKeys: [
        {
          name: 'b',
          type: AlphabetType.CONSONANT,
        },
        {
          name: 'a',
          type: AlphabetType.VOWEL,
        },
        {
          name: 'c',
          type: AlphabetType.CONSONANT,
        },
        {
          name: 'e',
          type: AlphabetType.VOWEL,
        },
        {
          name: 'd',
          type: AlphabetType.CONSONANT,
        },
        {
          name: 'u',
          type: AlphabetType.VOWEL,
        },
      ],
    },
    {
      testName: 'test-2',
      isTestComplete: false,
      testKeys: [
        {
          name: 's',
          type: AlphabetType.CONSONANT,
        },
        {
          name: 'a',
          type: AlphabetType.VOWEL,
        },
        {
          name: 'v',
          type: AlphabetType.CONSONANT,
        },
        {
          name: 'p',
          type: AlphabetType.CONSONANT,
        },
        {
          name: 'e',
          type: AlphabetType.VOWEL,
        },
        {
          name: 'u',
          type: AlphabetType.VOWEL,
        },
      ],
    },
  ];
  // previewList = ['a', 'b', 'c'];
  previewList: string[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any = 'Fill out the consonant letters in yellow boxes above by selecting the right letters in the green boxes below';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 2;
  gameLevel = GameLevel.LETTER;
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private _letterStageTwoSvc: LetterStageTwoService,
    private store: Store<LetterLevelResultState>,
    private _router: Router
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
    let keys = this.testList[this.testNumber]?.testKeys;
    this.keyList = new ShuffleArray(keys).shuffle();
  }

  onSelectAlphabet(alphabet: any) {
    this.previewList.push(alphabet.name);
    this.previewText = alphabet.name;
    setTimeout(() => {
      this.previewText = '';
    }, 500);
    if (alphabet.type == AlphabetType.CONSONANT) {
      if (
        !this.resultItemList.find((item: any) => item.name === alphabet.name)
      ) {
        this.resultItemList.push(alphabet);
        this.isComplete();
      }
    }
  }

  isComplete() {
    let expectedList = this.resultItemList.filter((item: any) => {
      return item.type == AlphabetType.CONSONANT;
    });
    let availableList = this.keyList.filter((item: any) => {
      return item.type == AlphabetType.CONSONANT;
    });
    if (availableList.length == expectedList.length) {
      this.testList[this.testNumber].isTestComplete = true;
      this.onCheckTestCompletion();
      if (expectedList.length == this.checkTestCompletion.length) {
        this.testGameCompletion();
        return;
      }

      this.testGameCompletion();
      setTimeout(() => {
        this.testNumber++;
        this.resultItemList = [];
        this.onReplceKeyList();
      }, 1500);
    } else {
      return;
    }
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe({
      next: (msg: any) => {
        this.gameSessionId = msg?.session_id
      },
    });
  }

  testGameCompletion() {
    this.onCheckTestCompletion();
    if (this.checkTestCompletion.length == this.testList.length) {
      const Payload: ActivityAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: [...this.checkTestCompletion],
      };
      this.store.dispatch(addLetterLevelStageTwoResult({ payload: Payload }));
      this._letterStageTwoSvc.addLetterLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            console.log('msg: ', msg);
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
