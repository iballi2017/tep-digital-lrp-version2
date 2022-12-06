import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatSnackBarModule, MatDialogModule],
  exports: [MatButtonModule, MatSnackBarModule, MatDialogModule],
})
export class NgMaterialModule {}
