import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LetterLevelResultState } from '../views/literacy-test/store/letter-level-result/letter-level-result.reducer';
import { letterLevelResultIsLoading } from '../views/literacy-test/store/letter-level-result/letter-level-result.selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  resultLoading$!: Observable<any>;
  constructor(private store: Store<LetterLevelResultState>) {}

  ngOnInit(): void {
    this.resultLoading$ = this.store.pipe(select(letterLevelResultIsLoading));
    console.log('this.resultLoading$: ', this.resultLoading$);
  }
}
