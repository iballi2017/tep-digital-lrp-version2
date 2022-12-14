import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { OccupantService } from 'src/app/services/occupant.service';
import { BooleanAlertDialogComponent } from 'src/app/shared/boolean-alert-dialog/boolean-alert-dialog.component';
import { loadOccupantList } from '../../store/occupant-list/occupant-list.actions';
import { OccupantListState } from '../../store/occupant-list/occupant-list.reducer';
import { selectOccupants } from '../../store/occupant-list/occupant-list.selectors';

@Component({
  selector: 'app-occupant-list',
  templateUrl: './occupant-list.component.html',
  styleUrls: ['./occupant-list.component.scss']
})
export class OccupantListComponent implements OnInit {
  Subscriptions: Subscription[] = [];
  btnClasses = "btn-40-height";
  btnDanger = {
    title: "Delete",
  }
  btnEdit = {
    title: "Edit",
  }


  occupantList$!: Observable<any[]>;
  constructor(private store: Store<OccupantListState>,
    private _occupantSvc: OccupantService, private _router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(loadOccupantList());
    // this.occupantList$ = this.occupantList;
    this.occupantList$ = this.store.pipe(select(selectOccupants));
    console.log("this.occupantList$ ##: ", this.occupantList$);
  }

  onViewRespondentDetails(item: any) {
    this._router.navigate(['account/occupant-details/', item?.occ_id]);
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




  onDeleteOccupant(respondentId: string) {
    const Payload = {
      occ_id: respondentId,
    };
    let subscription = this._occupantSvc.RemoveOccupant(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          this._router.navigate(['/account']);
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });
    this.Subscriptions.push(subscription);
  }






  ngOnDestroy(): void {

    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
