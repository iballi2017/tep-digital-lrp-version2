import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Occupant } from 'src/app/models/class/occupant';
import { IDeleteOccupant, IOccupant } from 'src/app/models/interface/occupant';
import { LocationService } from 'src/app/services/location.service';
import { OccupantService } from 'src/app/services/occupant.service';
import { BooleanAlertDialogComponent } from 'src/app/shared/shared.components/boolean-alert-dialog/boolean-alert-dialog.component';
import { deleteOccupant, loadSingleOccupant } from '../../store/occupant-list/occupant-list.actions';
import { OccupantListState } from '../../store/occupant-list/occupant-list.reducer';
import { selectedOccupant } from '../../store/occupant-list/occupant-list.selectors';

@Component({
  selector: 'app-occupant-details',
  templateUrl: './occupant-details.component.html',
  styleUrls: ['./occupant-details.component.scss']
})
export class OccupantDetailsComponent implements OnInit, OnDestroy {
  UpdateRespondentDetailsForm!: FormGroup;
  title = 'RESPONDENT DETAILS';
  num: number = 7;
  nigerianStateList: any;
  agesList: number[] = [];
  Subscriptions: Subscription[] = [];
  occupantId: any;
  submitBtnLabel: string = "Update";
  SaveBtnType: string = "submit";
  btnClasses: string = "btn-40-height";
  deleteBtnType = "Button";
  deleteBtnLabel = "Delete"
  // SaveBtnClasses = "btn primary-btn text-uppercase form-btn mr-2";
  constructor(
    private _fb: FormBuilder,
    private _locationSvc: LocationService,
    private _route: ActivatedRoute,
    private _occupantSvc: OccupantService,
    private _router: Router, private store: Store<OccupantListState>,   
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.buildForm();
    this.onGetParams();
    this.onGetNigerianStates();
    let x: number = this.num;
    this.createNumberArray(x);
    this.getOccupantDetailsFromStore();
  }


  onGetParams() {
    let subscription = this._route.paramMap.subscribe({
      next: (params: any) => {
        // console.warn('params: ', params);
        let occupantId = params.get('occupantId');
        // console.warn('occupantId: ', occupantId);
        this.occupantId = occupantId;
        this.store.dispatch(loadSingleOccupant({ id: occupantId }))
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });
    this.Subscriptions.push(subscription);
  }
  onGetNigerianStates() {
    this.nigerianStateList = this._locationSvc.getNigerianStates();
  }


  buildForm() {
    this.UpdateRespondentDetailsForm = this._fb.group({
      FullName: '',
      Age: '',
      Location: '',
      Gender: '',
    });
  }

  createNumberArray(d: number) {
    while (d < 12) {
      this.agesList.push(d);
      d++;
    }
  }



  getOccupantDetailsFromStore() {
    this.store.pipe(select(selectedOccupant)).subscribe(
      data => {
        // console.warn("=>>: ", data)
        let occupantData$ = Object.assign(new Occupant(), data);
        this.prefillForm(occupantData$);
      }
    );
  }

  prefillForm(data: any) {
    // console.group("occupant details: ", data)
    this.UpdateRespondentDetailsForm.controls['FullName'].setValue(
      data?.occ_name
    );
    this.UpdateRespondentDetailsForm.controls['Age'].setValue(
      parseInt(data?.occ_age)
    );
    this.UpdateRespondentDetailsForm.controls['Location'].setValue(
      data?.occ_state
    );
    this.UpdateRespondentDetailsForm.controls['Gender'].setValue(
      data?.occ_gender
    );
  }



  onSubmit() {
    const Payload: IOccupant = {
      occ_id: this.occupantId,
      occ_name: this.UpdateRespondentDetailsForm.value.FullName,
      occ_state: this.UpdateRespondentDetailsForm.value.Location,
      occ_age: this.UpdateRespondentDetailsForm.value.Age,
      occ_gender: this.UpdateRespondentDetailsForm.value.Gender,
    };

    let subscription = this._occupantSvc
      .UpdateOccupantDetails(Payload)
      .subscribe({
        next: (response: any) => {
          if (response) {
            this._router.navigate(['/account/personal-information']);
          }
        },
        error: (err: any) => {
          console.warn('Error: ', err);
        },
      });
    this.Subscriptions.push(subscription);
  }

  onRemove(occupantId: string) {
    console.log(occupantId)
    this.openDialog(occupantId);
  }
  openDialog(item: any) {
    const dialogRef = this.dialog.open(BooleanAlertDialogComponent, {
      width: '100%',
      maxWidth: '500px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.onDeleteOccupant(item);
      }
    });
  }


  

  onDeleteOccupant(occupantId: string) {
    // const Payload = {
    //   occ_id: occupantId,
    // };
    const Payload:IDeleteOccupant = {
      occ_id: occupantId,
    };
    this.store.dispatch(deleteOccupant({occ_id: Payload}));
    // let subscription = this._occupantSvc.RemoveOccupant(Payload).subscribe({
    //   next: (response: any) => {
    //     if (response) {
    //       this._router.navigate(['/account']);
    //     }
    //   },
    //   error: (err: any) => {
    //     console.warn('Error: ', err);
    //   },
    // });
    // this.Subscriptions.push(subscription);
  }




  back() {
    history.back()
  }


  ngOnDestroy(): void {

    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
