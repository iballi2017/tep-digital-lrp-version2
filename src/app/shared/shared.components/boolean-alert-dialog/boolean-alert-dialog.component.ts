import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-boolean-alert-dialog',
  templateUrl: './boolean-alert-dialog.component.html',
  styleUrls: ['./boolean-alert-dialog.component.scss'],
})
export class BooleanAlertDialogComponent implements OnInit {
  textInfo!: string;
  constructor(
    public dialogRef: MatDialogRef<BooleanAlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { textInfo: string }
  ) {}

  ngOnInit(): void {
    this.textInfo = this.data.textInfo;
  }

  closeDialogForNo() {
    this.dialogRef.close(false);
  }

  closeDialogForYes() {
    this.dialogRef.close(true);
  }
}
