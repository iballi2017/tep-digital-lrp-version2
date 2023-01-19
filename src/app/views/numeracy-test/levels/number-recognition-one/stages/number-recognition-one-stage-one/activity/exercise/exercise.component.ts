import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  boardActivityHint: string = 'Identify the 1-digit numbers';

  constructor() {}

  ngOnInit(): void {}

  onReadHint() {}
  refreshGame() {}
}
