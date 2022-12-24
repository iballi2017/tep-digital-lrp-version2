import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-activity-hint-dialog',
  templateUrl: './activity-hint-dialog.component.html',
  styleUrls: ['./activity-hint-dialog.component.scss']
})
export class ActivityHintDialogComponent implements OnInit {
  title: string = "hint";
  hint!: string;
  constructor(public dialogRef: MatDialogRef<ActivityHintDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {hint: string}) { }

  ngOnInit(): void {
    this.hint = this.data?.hint
  }



  closeDialog() {
    this.dialogRef.close('closed!');
  }
}
