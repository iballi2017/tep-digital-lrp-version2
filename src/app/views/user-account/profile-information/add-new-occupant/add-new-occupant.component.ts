import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { OccupantService } from 'src/app/services/occupant.service';

@Component({
  selector: 'app-add-new-occupant',
  templateUrl: './add-new-occupant.component.html',
  styleUrls: ['./add-new-occupant.component.scss']
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
  isSending: boolean = false;
  constructor(
    private _locationSvc: LocationService,
    private _fb: FormBuilder,
    private _occupantSvc: OccupantService,
    public dialogRef: MatDialogRef<AddNewOccupantComponent>
  ) { }

  ngOnInit(): void {
    this.onGetNigerianStates();
    this.buildForm();
    let x: number = this.num;
    this.createNumberArray(x);
    // this.onErrorMsg();
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
    let subscription = this._occupantSvc.AddOccupant(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          console.log("response: ", response)
          console.warn("response: ", response)
          this.responseMessage = response?.message;
          this._occupantSvc.LoadOccupants();
          setTimeout(() => {
            this.closeDialog();
          }, 3000);
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err?.error?.message);
        // this.onErrorMsg();
      },
    });
    this.Subscriptions.push(subscription);
  }

  closeDialog() {
    this.dialogRef.close('Form closed!');
  }

  // onErrorMsg() {
  //   this.error$.subscribe({
  //     next: (errorMsg: any) => {
  //       if (errorMsg) {
  //         this.errorMsg = errorMsg;
  //         setTimeout(() => {
  //           this.errorMsg = '';
  //         }, 4000);
  //       }
  //     },
  //   });
  // }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }

}
