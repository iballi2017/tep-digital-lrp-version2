import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { GameType } from 'src/app/models/interface/game-type';
import { TestOccupantSelectionComponent } from '../components/test-occupant-selection/test-occupant-selection.component';

@Component({
  selector: 'app-program-selection',
  templateUrl: './program-selection.component.html',
  styleUrls: ['./program-selection.component.scss']
})
export class ProgramSelectionComponent implements OnInit {
  QuestionCategoryForm!: FormGroup;
  LiteracyGameType = GameType.LITERACY;
  NumeracyGameType = GameType.NUMERACY;
  constructor(private _fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.QuestionCategoryForm = this._fb.group({
      QuestionCategory: '',
    });
  }

  openNumberOfUsersInputDialog(QuestionCategory: string) {
    const dialogRef = this.dialog.open(TestOccupantSelectionComponent, {
      width: '100%',
      maxWidth: '550px',
      data: {
        QuestionCategory: QuestionCategory,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.QuestionCategoryForm?.reset();
    });
  }

  onSubmit(QuestionCategoryForm: any) {
    this.openNumberOfUsersInputDialog(QuestionCategoryForm.value);
  }

}
