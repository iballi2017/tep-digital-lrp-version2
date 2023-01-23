import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { buildQueryParams } from 'src/app/helpers/buildQueryParams';
import { IDeleteOccupant } from 'src/app/models/interface/occupant';
import { QueryParamsModel } from 'src/app/models/interface/queryParamsModel';
import { BooleanAlertDialogComponent } from 'src/app/shared/shared.components/boolean-alert-dialog/boolean-alert-dialog.component';
import {
  deleteOccupant,
  deleteOccupantFailure,
  deleteOccupantSuccess,
  loadOccupantList,
} from '../../store/occupant-list/occupant-list.actions';
import { OccupantListState } from '../../store/occupant-list/occupant-list.reducer';
import {
  isLoadingOccupantState,
  selectOccupants,
} from '../../store/occupant-list/occupant-list.selectors';

@Component({
  selector: 'app-occupant-list',
  templateUrl: './occupant-list.component.html',
  styleUrls: ['./occupant-list.component.scss'],
})
export class OccupantListComponent implements OnInit, AfterContentInit {
  Subscriptions: Subscription[] = [];
  btnClasses = 'btn-40-height';
  btnDanger = {
    title: 'Delete',
  };
  btnEdit = {
    title: 'Edit',
  };

  occupantList$!: Observable<any[]>;
  list: any;
  occupantListLoading$!: Observable<boolean>;
  isLoading!: boolean;
  page: number = 1;
  count = 0;
  ItemsPerPage = 20;
  totalRecords!: string;
  occupantListQuery: QueryParamsModel = {
    pageSize: this.ItemsPerPage,
    pageNumber: this.page,
  };
  constructor(
    private store: Store<OccupantListState>,
    private _router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const Payload = buildQueryParams(this.occupantListQuery);
    this.store.dispatch(loadOccupantList({ Payload }));
    this.occupantList$ = this.store.pipe(select(selectOccupants));
    this.occupantListLoading$ = this.store.pipe(select(isLoadingOccupantState));
    this.getOccupantList();
  }
  ngAfterContentInit() {
    let subscription = this.occupantListLoading$.subscribe({
      next: (response: any) => {
        if (response) {
          this.isLoading = response;
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
        }
      },
    });
    this.Subscriptions.push(subscription);
  }
  getOccupantList() {
    let subscription = this.occupantList$.subscribe({
      next: (response: any) => {
        if (response) {
          this.list = response;
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
        }
      },
    });
    this.Subscriptions.push(subscription);
  }

  onViewRespondentDetails(item: any) {
    this._router.navigate(['account/occupant-details/', item?.occ_id]);
  }
  onRemove(occupantId: string) {
    console.log(occupantId);
    this.openDialog(occupantId);
  }
  openDialog(item: any) {
    const dialogRef = this.dialog.open(BooleanAlertDialogComponent, {
      width: '100%',
      maxWidth: '500px',
      data: {
        textInfo: 'Are you sure you want to delete this Occupant?',
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.onDeleteOccupant(item);
      }
    });
  }

  onDeleteOccupant(occupantId: string) {
    const Payload: IDeleteOccupant = {
      occ_id: occupantId,
    };
    this.store.dispatch(deleteOccupant({ occ_id: Payload }));;
  }

  pageChangeEvent($event: any) {
    this.page = $event;
    this.occupantListQuery = {
      pageSize: this.ItemsPerPage,
      pageNumber: this.page,
    };
    const Payload = buildQueryParams(this.occupantListQuery);
    this.store.dispatch(loadOccupantList({ Payload }));
  }


  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
