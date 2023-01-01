import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-long-text-read-dialog',
  templateUrl: './long-text-read-dialog.component.html',
  styleUrls: ['./long-text-read-dialog.component.scss'],
})
export class LongTextReadDialogComponent implements OnInit {
  text: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { text: string },
  public dialogRef: MatDialogRef<LongTextReadDialogComponent>,) {}

  ngOnInit(): void {
    console.log(this.data);
    this.text = this.data.text
  }


  continueTestSubmission(){
    this.dialogRef.close(true);
  }
}
