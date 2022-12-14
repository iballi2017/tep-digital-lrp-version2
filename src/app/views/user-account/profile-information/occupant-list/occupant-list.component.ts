import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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
  constructor(private store: Store<OccupantListState>, private _router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(loadOccupantList());
    // this.occupantList$ = this.occupantList;
    this.occupantList$ = this.store.pipe(select(selectOccupants));
    console.log("this.occupantList$ ##: ", this.occupantList$);
  }

  onViewRespondentDetails(item: any) {
    this._router.navigate(['account/occupant-details/', item?.occ_id]);
  }

  ngOnDestroy(): void {

    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
