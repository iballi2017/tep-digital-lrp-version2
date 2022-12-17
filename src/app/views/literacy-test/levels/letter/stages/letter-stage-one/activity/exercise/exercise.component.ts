import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  boardActivityHint: string = 'Reveal the hidden vowel letters';
  keyList: any[] = [
    "a", "j", "e", "m", "i", "b"
  ]
  constructor() { }

  ngOnInit(): void { }
}
