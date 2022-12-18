import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GameSessionData, StartGame } from 'src/app/models/interface/game';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { OccupantService } from 'src/app/services/occupant.service';
import { AddNewOccupantComponent } from 'src/app/views/user-account/profile-information/add-new-occupant/add-new-occupant.component';

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
  isStatingTest:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<TestOccupantSelectionComponent>,
    public dialog: MatDialog,
    // private _occupantSvc: OccupantService,
    private _fb: FormBuilder,
    // private _gameSvc: GameService,
    // private ngRedux: NgRedux<IAppState>,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { QuestionCategory: any },
    private _gameSvc: GameService,
    private _occupantSvc: OccupantService
  ) {}

  ngOnInit(): void {
    this.getOccupantList();
    this.buildForm();

    let isGame = this._gameSvc.IsGame();
  }
  getOccupantList() {
    this._occupantSvc.LoadOccupants().subscribe({
      next: (response: any) => {
        if (response) {
          if (response) {
            console.log('response: ', response);
            this.occupantsList = response?.data;
            // this.ngRedux.dispatch({
            //   type: FETCH_OCCUPANTS_LIST_SUCCESS,
            //   payload: response.data,
            // });
          }
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
        // this.ngRedux.dispatch({
        //   type: FETCH_OCCUPANTS_LIST_ERROR,
        //   payload: err,
        // });
      },
    });
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
          // this.ngRedux.dispatch({
          //   type: ADD_GAME_SESSION_SUCCESS,
          //   payload: response,
          // });
          // this._router.navigate(['/literacy/levels/lettering']);

          var newGameSession = {
            // id: state.reportsList?.length + 1,
            id: new Date().getTime().toString(),
            ...response,
          };
          let sessionData = JSON.stringify(newGameSession);
          localStorage.setItem(GameSessionData.name, sessionData);
          const gameResult = {};
          let result = JSON.stringify(gameResult);
          localStorage.setItem(GameSessionData.result, result);


          this.routeToGame(Payload.game_type.toLowerCase());
          this.closeDialog();
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
          this.isStatingTest = false;
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
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
