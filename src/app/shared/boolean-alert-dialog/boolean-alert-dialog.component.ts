import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-boolean-alert-dialog',
  templateUrl: './boolean-alert-dialog.component.html',
  styleUrls: ['./boolean-alert-dialog.component.scss']
})
export class BooleanAlertDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BooleanAlertDialogComponent>) { }

  ngOnInit(): void {
  }

  
  closeDialogForNo() {
    this.dialogRef.close(false);
  }

  
  closeDialogForYes() {
    this.dialogRef.close(true);
  }

}
