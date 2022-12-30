import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GameSessionData, StartGame } from 'src/app/models/interface/game';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { OccupantService } from 'src/app/services/occupant.service';
import {
  addGameSessionFailure,
  addGameSessionSuccess,
} from 'src/app/shared/store/game/game.actions';
import { AddNewOccupantComponent } from 'src/app/views/user-account/profile-information/add-new-occupant/add-new-occupant.component';
import { loadOccupantList } from 'src/app/views/user-account/store/occupant-list/occupant-list.actions';
import { OccupantListState } from 'src/app/views/user-account/store/occupant-list/occupant-list.reducer';
import { isLoadingOccupantState, selectOccupants } from 'src/app/views/user-account/store/occupant-list/occupant-list.selectors';

@Component({
  selector: 'app-test-occupant-selection',
  templateUrl: './test-occupant-selection.component.html',
  styleUrls: ['./test-occupant-selection.component.scss'],
})
export class TestOccupantSelectionComponent implements OnInit {
  title = 'SELECT NAME OF THE CHILD TAKING THE TEST';
  // @select((s) => s.occupantsList.occupantsList) occupantsList$: any;
  // @select((s) => s.game.isLoading) gameIsLoading$: any;
  OccupantSelectionForm!: FormGroup;
  selectedValue: any;
  occupantsList: any[] = [];
  newOccupantBtnLabel: string = 'Add New';
  continueBtnLabel: string = 'Continue';
  cancelBtnLabel: string = 'Cancel';
  isStatingTest: boolean = false;
  occupantList$!: Observable<any[]>;
  selectLabel: string = 'Select occupant';
  isLoadingOccupantState$!: Observable<boolean>;

  constructor(
    public dialogRef: MatDialogRef<TestOccupantSelectionComponent>,
    public dialog: MatDialog,
    private _fb: FormBuilder,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { QuestionCategory: any },
    private _gameSvc: GameService,
    private store: Store<OccupantListState>
  ) {}

  ngOnInit(): void {
    this.getOccupantList();
    this.buildForm();

    // let isGame = this._gameSvc.IsGame();
    this.isLoadingOccupantState$ = this.store.pipe(select(isLoadingOccupantState));
  }
  getOccupantList() {
    this.store.dispatch(loadOccupantList());
    this.occupantList$ = this.store.pipe(select(selectOccupants));
  }

  buildForm() {
    this.OccupantSelectionForm = this._fb.group({
      RespondentId: ['', [Validators.required]],
    });
  }
  onSubmit() {
    // this.ngRedux.dispatch({ type: ADD_GAME_SESSION });
    const Payload: StartGame = {
      occ_id: this.OccupantSelectionForm.value.RespondentId,
      // game_type: GameType.Literacy,
      game_type: this.data?.QuestionCategory?.QuestionCategory,
    };
    console.log('Payload: ', Payload);
    this.sendData(Payload);
  }

  sendData(Payload: any) {
    this.isStatingTest = true;
    this._gameSvc.StartGame(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          this.isStatingTest = false;
          this.store.dispatch(addGameSessionSuccess({ sessionData: response }));
          this.routeToGame(Payload.game_type.toLowerCase());
          this.closeDialog();
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
          this.isStatingTest = false;
          this.store.dispatch(addGameSessionFailure({ error: err }));
          // this.ngRedux.dispatch({
          //   type: FETCH_GAME_SESSION_ERROR,
          //   payload: err,
          // });
        }
      },
    });
  }

  routeToGame(GT: string) {
    switch (GT) {
      case GameType.LITERACY.toLowerCase():
        this._router.navigate(['/literacy/levels/letter']);
        break;
      case GameType.NUMERACY.toLowerCase():
        this._router.navigate(['/numeracy/levels/number-recognition-one']);
        break;
      default:
        break;
    }
  }

  closeDialog() {
    this.dialogRef.close('dialod closed!');
  }

  openAddNewOccupantDialog() {
    this.dialogRef.close('dialod closed!');
    const dialogRef = this.dialog.open(AddNewOccupantComponent, {
      width: '100%',
      maxWidth: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
