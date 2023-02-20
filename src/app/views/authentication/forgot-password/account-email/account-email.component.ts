import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ForgotPasswordService,
  RegisteredEmail,
} from 'src/app/services/forgot-password.service';
import { sendForgotPasswordEmailAddress } from '../../store/forgot-password/forgot-password.actions';
import { ForgotPasswordState } from '../../store/forgot-password/forgot-password.reducer';
import { isLoadingForgotPasswordStateState, selectedsendRegisteredEmailResponse } from '../../store/forgot-password/forgot-password.selector';

@Component({
  selector: 'app-account-email',
  templateUrl: './account-email.component.html',
  styleUrls: ['./account-email.component.scss'],
})
export class AccountEmailComponent implements OnInit {
  // @select((s) => s.forgotPassword.sendRegisteredEmailResponse)
  // sendRegisteredEmailResponse$: any;
  // @select((s) => s.forgotPassword.error)
  // error$: any;
  // @select((s) => s.forgotPassword.isLoading) isLoading$: any;
  btnTitle = 'Send';
  btnClasses = 'btn primary-btn text-uppercase px-5 py-2';
  VerifyEmailForm!: FormGroup;
  isLoadingForgotPasswordStateState$!: Observable<any>;
  selectedsendRegisteredEmailResponse$!: Observable<any>;
  constructor(
    private _fb: FormBuilder,
    private _forgotPasswordSvc: ForgotPasswordService,
    // private ngRedux: NgRedux<IAppState>,
    private store: Store<ForgotPasswordState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
    
    this.selectedsendRegisteredEmailResponse$ = this.store.pipe(
      select(selectedsendRegisteredEmailResponse)
    );
    
    this.isLoadingForgotPasswordStateState$ = this.store.pipe(
      select(isLoadingForgotPasswordStateState)
    );

    this.isLoadingForgotPasswordStateState$.subscribe((load: boolean) => {
      if (load) {
        this.btnTitle = 'Loading...';
      } else {
        this.btnTitle = 'Send';
      }
    });

  }

  buildForm() {
    this.VerifyEmailForm = this._fb.group({
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    // this.ngRedux.dispatch({ type: SEND_REGISTERED_EMAIL });
    const Payload: RegisteredEmail = {
      usr_email: this.VerifyEmailForm.value.Email,
    };
    console.log('Payload: ', Payload);
    this.store.dispatch(
      sendForgotPasswordEmailAddress({ emailAddress: Payload })
    );
    this._forgotPasswordSvc.SendRegisteredEmailBehaviourSubject.subscribe((msg: any) => {
      if (msg) {
        console.log('msg: ', msg);
        this.VerifyEmailForm.reset();
      }
    });



    // this._forgotPasswordSvc.SendRegisteredEmail(Payload).subscribe({
    //   next: (response: any) => {
    //     if (response) {
    //       console.log('response: ', response);
    //       // this.ngRedux.dispatch({
    //       //   type: SEND_REGISTERED_EMAIL_SUCCESS,
    //       //   payload: response.message,
    //       // });
    //       this.VerifyEmailForm.reset();
    //     }
    //   },
    //   error: (err: any) => {
    //     if (err) {
    //       console.error('Error: ', err);
    //       // this.ngRedux.dispatch({
    //       //   type: SEND_REGISTERED_EMAIL_ERROR,
    //       //   payload: err?.error?.error?.message,
    //       // });
    //     }
    //   },
    // });
  }
}
