import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LetterLevelResultState } from '../views/literacy-test/store/letter-level-result/letter-level-result.reducer';
import { letterLevelResultIsLoading } from '../views/literacy-test/store/letter-level-result/letter-level-result.selectors';
import { WordLevelResultState } from '../views/literacy-test/store/word-level-result/word-level-result.reducer';
import { wordLevelResultIsLoading } from '../views/literacy-test/store/word-level-result/word-level-result.selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  letterResultLoading$!: Observable<any>;
  wordResultLoading$!: Observable<any>;
  constructor(private storeLetter: Store<LetterLevelResultState>,private storeWord: Store<WordLevelResultState>) {}

  ngOnInit(): void {
    this.letterResultLoading$ = this.storeLetter.pipe(
      select(letterLevelResultIsLoading)
    );
    this.wordResultLoading$ = this.storeWord.pipe(select(wordLevelResultIsLoading));
  }
}
