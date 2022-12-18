import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { OccupantMessengerService } from 'src/app/services/occupant-messenger.service';
import { OccupantService } from 'src/app/services/occupant.service';
import { addOccupant } from '../../store/occupant-list/occupant-list.actions';
import { OccupantListState } from '../../store/occupant-list/occupant-list.reducer';
import { occupantStateIsLoading } from '../../store/occupant-list/occupant-list.selectors';

@Component({
  selector: 'app-add-new-occupant',
  templateUrl: './add-new-occupant.component.html',
  styleUrls: ['./add-new-occupant.component.scss'],
})
export class AddNewOccupantComponent implements OnInit, OnDestroy {
  errorMsg!: string;
  submitBtnLabel = 'Add Respondent';
  nigerianStateList!: string[];
  num: number = 7;
  agesList: number[] = [];
  AddRespondentForm!: FormGroup;
  Subscriptions: Subscription[] = [];
  responseMessage: any;
  occupantStateIsLoading$!: Observable<any>;
  constructor(
    private _locationSvc: LocationService,
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddNewOccupantComponent>,
    private store: Store<OccupantListState>,
    private _occupantMessengerSvc: OccupantMessengerService
  ) {}

  ngOnInit(): void {
    this.onGetNigerianStates();
    this.buildForm();
    let x: number = this.num;
    this.createNumberArray(x);
    this.occupantStateIsLoading$ = this.store.pipe(
      select(occupantStateIsLoading)
    );
  }

  createNumberArray(d: number) {
    while (d < 12) {
      this.agesList.push(d);
      d++;
    }
  }

  buildForm() {
    this.AddRespondentForm = this._fb.group({
      FullName: ['', [Validators.required]],
      Gender: ['Male', [Validators.required]],
      Age: ['7', [Validators.required]],
      Location: ['', [Validators.required]],
    });
  }

  onGetNigerianStates() {
    this.nigerianStateList = this._locationSvc.getNigerianStates();
  }

  onSubmit() {
    const Payload = {
      occ_name: this.AddRespondentForm.value.FullName,
      occ_state: this.AddRespondentForm.value.Location,
      occ_age: this.AddRespondentForm.value.Age,
      occ_gender: this.AddRespondentForm.value.Gender,
    };
    console.log('Payload: ', Payload);
    this.store.dispatch(addOccupant({ occupant: Payload }));
    this._occupantMessengerSvc.addOccupantBehaviour.subscribe((msg: any) => {
      if (msg) {
        this.AddRespondentForm.reset();
        this.closeDialog();
      }
    });
  }

  closeDialog() {
    this.dialogRef.close('Form closed!');
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
