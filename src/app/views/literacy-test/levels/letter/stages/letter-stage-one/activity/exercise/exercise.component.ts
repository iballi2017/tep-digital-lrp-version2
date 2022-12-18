import { Component, OnInit } from '@angular/core';
import { AlphabetType } from 'src/app/models/interface/alphabet-type';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  boardActivityHint: string = 'Reveal the hidden vowel letters';
  keyList: any[] = [
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
  ];
  // previewList = ['a', 'b', 'c'];
  previewList: string[] = [];
  resultItemList: string[] = [];
  previewText: string = '';
  constructor() {}

  ngOnInit(): void {}

  onSelectAlphabet(alphabet: any) {
    console.log('alphabet: ', alphabet);
    this.previewList.push(alphabet.name);
    this.previewText = alphabet.name;
    setTimeout(() => {
      this.previewText = '';
    }, 500);
    if (alphabet.type == AlphabetType.VOWEL) {
      this.resultItemList.push(alphabet.name);
    }
  }
}
