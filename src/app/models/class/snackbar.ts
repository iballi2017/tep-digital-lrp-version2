import { ErrorSnackbarComponent } from 'src/app/shared/snackbar/error-snackbar/error-snackbar.component';
import { SuccessSnackbarComponent } from 'src/app/shared/snackbar/success-snackbar/success-snackbar.component';

export class Snackbar {
  snackBar: any;
  text: any;
  durationInSeconds: number = 5;
  constructor(text: any, snackBar: any, postion?: any) {
    this.snackBar = snackBar;
    this.text = text;
  }
  openTextSnackBar() {
    console.log('this.text: ', this.text);
    this.snackBar.open(this.text, '', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  successSnackbar() {
    console.log('this.text: ', this.text);
    this.snackBar.openFromComponent(SuccessSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      data: this.text,
    });
  }

  errorSnackbar() {
    console.log('this.text: ', this.text);
    this.snackBar.openFromComponent(ErrorSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      data: this.text,
    });
  }
}
