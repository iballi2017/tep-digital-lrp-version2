import { Component, OnInit } from '@angular/core';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { NumberDigitType } from 'src/app/models/interface/number-type';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  boardActivityHint: string = 'Identify the 1-digit numbers';
  testNumber: number = 0;
  ONE_DIGIT_NUMBER = NumberDigitType.ONE_DIGIT_NUMBER;
  TWO_DIGIT_NUMBER = NumberDigitType.TWO_DIGIT_NUMBER;
  keyList: any[] = [];
  previewList: string[] = [];
  previewText: string = '';
  resultItemList: any[] = [];
  checkTestCompletion: any;


  testList = [
    {
      testName: 'test-1',
      isTestComplete: false,
      testKeys: [
        {
          name: '5',
          type: NumberDigitType.ONE_DIGIT_NUMBER,
          // vn: NumberNote.A_Note,
        },
        {
          name: '23',
          type: NumberDigitType.TWO_DIGIT_NUMBER,
        },
        {
          name: '3',
          type: NumberDigitType.ONE_DIGIT_NUMBER
        },
      ],
    },
    {
      testName: 'test-2',
      isTestComplete: false,
      testKeys: [
        {
          name: '23',
          type: NumberDigitType.TWO_DIGIT_NUMBER,
          // vn: NumberNote.A_Note,
        },
        {
          name: '6',
          type: NumberDigitType.ONE_DIGIT_NUMBER,
        },
        {
          name: '9',
          type: NumberDigitType.ONE_DIGIT_NUMBER
        },
      ],
    },
    {
      testName: 'test-3',
      isTestComplete: false,
      testKeys: [
        {
          name: '2',
          type: NumberDigitType.ONE_DIGIT_NUMBER,
          // vn: NumberNote.A_Note,
        },
        {
          name: '23',
          type: NumberDigitType.TWO_DIGIT_NUMBER,
        },
        {
          name: '7',
          type: NumberDigitType.ONE_DIGIT_NUMBER
        },
      ],
    }
  ];
  gameSessionId!: string;
  constructor(private _gameSvc: GameService) { }

  ngOnInit(): void {
    this.onReplceKeyList();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();
  }

  onReplceKeyList() {
    let keys = this.testList[this.testNumber]?.testKeys;
    this.keyList = new ShuffleArray(keys).shuffle();
  }


  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe({
      next: (msg: any) => {
        this.gameSessionId = msg?.session_id;
      },
    });
  }


  onSelectAlphabet(number: any) {
    console.log("number: ", number);
    this.previewList.push(number.name);
    this.previewText = number.name;
    setTimeout(() => {
      this.previewText = '';
    }, 500);
    if (number.type == NumberDigitType.ONE_DIGIT_NUMBER) {
      if (
        !this.resultItemList.find((item: any) => item.name === number.name)
      ) {
        this.resultItemList.push(number);
        this.isComplete();
      }
    }
  }


  isComplete() {
    let expectedList = this.resultItemList.filter((item: any) => {
      return item.type == NumberDigitType.ONE_DIGIT_NUMBER;
    });
    console.log("keyList: ", this.keyList)
    let availableList = this.keyList.filter((item: any) => {
      return item.type == NumberDigitType.ONE_DIGIT_NUMBER;
    });
    console.log("availableList.length: ", availableList.length)
    console.log("expectedList.length: ", expectedList.length)
    // console.warn("availableList.length == expectedList.length: ", availableList.length == expectedList.length)
    // console.log("this.checkTestCompletion.length: ", this.checkTestCompletion.length)
    if (availableList.length == expectedList.length) {
      this.testList[this.testNumber].isTestComplete = true;
      this.onCheckTestCompletion();
      if (this.testList.length == this.checkTestCompletion.length) {
        setTimeout(() => {
          // alert("completed!!!")
          this.testGameCompletion();
        }, 2000);
        return;
      }
      setTimeout(() => {
        this.testNumber++;
        this.resultItemList = [];
        this.onReplceKeyList();
      }, 1500);
    } else {
      return;
    }
  }

  testGameCompletion() {
    this.onCheckTestCompletion();
    console.log("this.testList.length: ", this.testList.length)
    console.log("this.checkTestCompletion.length: ", this.checkTestCompletion.length)
    console.warn("this.checkTestCompletion.length == this.testList.length: ", this.checkTestCompletion.length == this.testList.length)

    if (this.checkTestCompletion.length == this.testList.length) {
      const Payload: ActivityAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: [...this.checkTestCompletion],
      };
      alert("Completed!!!")
      // this.store.dispatch(addLetterLevelStageOneResult({ payload: Payload }));
      // this._letterStageOneSvc.addLetterLevelResultBehaviour.subscribe(
      //   (msg: any) => {
      //     if (msg) {
      //       console.log('msg: ', msg);
      //       this._router.navigate([
      //         `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
      //       ]);
      //     }
      //   }
      // );
    }
    return;
  }

  onCheckTestCompletion() {
    this.checkTestCompletion = this.testList.filter(
      (test: any) => test.isTestComplete == true
    );
    console.log("this.testList : ", this.testList)
    console.log("this.checkTestCompletion : ", this.checkTestCompletion)
  }

  onReadHint() { }
  refreshGame() { }
}
