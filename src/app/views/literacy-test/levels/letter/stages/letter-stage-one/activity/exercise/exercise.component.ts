import { Component, OnInit } from '@angular/core';
import { AlphabetType } from 'src/app/models/interface/alphabet-type';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  boardActivityHint: string = 'Reveal the hidden vowel letters';
  CONSONANT = AlphabetType.CONSONANT;
  VOWEL = AlphabetType.VOWEL;
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [
    // {
    //   name: 'a',
    //   type: AlphabetType.VOWEL,
    // },
    // {
    //   name: 'j',
    //   type: AlphabetType.CONSONANT,
    // },
    // {
    //   name: 'e',
    //   type: AlphabetType.VOWEL,
    // },
    // {
    //   name: 'm',
    //   type: AlphabetType.CONSONANT,
    // },
    // {
    //   name: 'i',
    //   type: AlphabetType.VOWEL,
    // },
    // {
    //   name: 'b',
    //   type: AlphabetType.CONSONANT,
    // },
  ];

  testList = [
    {
      testName: 'test-1',
      isTestComplete: false,
      testKeys: [
        {
          name: 'a',
          type: AlphabetType.VOWEL,
        },
        {
          name: 'j',
          type: AlphabetType.CONSONANT,
        },
        {
          name: 'e',
          type: AlphabetType.VOWEL,
        },
        {
          name: 'm',
          type: AlphabetType.CONSONANT,
        },
        {
          name: 'i',
          type: AlphabetType.VOWEL,
        },
        {
          name: 'b',
          type: AlphabetType.CONSONANT,
        },
      ],
    },
    {
      testName: 'test-2',
      isTestComplete: false,
      testKeys: [
        {
          name: 'z',
          type: AlphabetType.CONSONANT,
        },
        {
          name: 'u',
          type: AlphabetType.VOWEL,
        },
        {
          name: 'y',
          type: AlphabetType.CONSONANT,
        },
        {
          name: 'o',
          type: AlphabetType.VOWEL,
        },
        {
          name: 'j',
          type: AlphabetType.CONSONANT,
        },
        {
          name: 'c',
          type: AlphabetType.CONSONANT,
        },
      ],
    },
  ];
  // previewList = ['a', 'b', 'c'];
  previewList: string[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  constructor() {}

  ngOnInit(): void {
    this.onReplceKeyList();
    this.onCheckTestCompletion();
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
    this.previewList.push(alphabet.name);
    this.previewText = alphabet.name;
    setTimeout(() => {
      this.previewText = '';
    }, 500);
    if (alphabet.type == AlphabetType.VOWEL) {
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
      return item.type == AlphabetType.VOWEL;
    });
    let availableList = this.keyList.filter((item: any) => {
      return item.type == AlphabetType.VOWEL;
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

  testGameCompletion() {
    this.onCheckTestCompletion();
    if (this.checkTestCompletion.length == this.testList.length) {
      setTimeout(() => {
        alert('Complete!');
      }, 1500);
    }
    return;
  }

  refreshGame() {}
  hint() {}
}
