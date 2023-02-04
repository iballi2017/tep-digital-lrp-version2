import { ErrorSnackbarComponent } from 'src/app/shared/shared.components/snackbar/error-snackbar/error-snackbar.component';
import { SuccessSnackbarComponent } from 'src/app/shared/shared.components/snackbar/success-snackbar/success-snackbar.component';

export class Snackbar {
  snackBar: any;
  text: any;
  durationInSeconds: number = 5;
  postionHorizontal: string;
  postionVertical: string;
  constructor(
    text: any,
    snackBar: any,
    postionHorizontal: string = 'end',
    postionVertical: string = 'bottom'
  ) {
    this.snackBar = snackBar;
    this.text = text;
    this.postionHorizontal = postionHorizontal;
    this.postionVertical = postionVertical;
  }
  openTextSnackBar() {
    console.log('this.text: ', this.text);
    this.snackBar.open(this.text, '', {
      horizontalPosition: this.postionHorizontal,
      verticalPosition: this.postionVertical,
    });
  }

  successSnackbar() {
    console.log('this.text: ', this.text);
    this.snackBar.openFromComponent(SuccessSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.postionHorizontal,
      verticalPosition: this.postionVertical,
      data: this.text,
    });
  }

  errorSnackbar() {
    console.log('this.text: ', this.text);
    this.snackBar.openFromComponent(ErrorSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.postionHorizontal,
      verticalPosition: this.postionVertical,
      data: this.text,
    });
  }
}
