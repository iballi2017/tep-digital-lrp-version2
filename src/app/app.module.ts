import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { TokenInterceptor } from './helpers/token.interceptor';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
// import { ToastNoAnimationModule } from 'ngx-toastr';
import * as fromLetterLevelResult from './views/literacy-test/store/letter-level-result/letter-level-result.reducer';
import * as fromWordLevelResult from './views/literacy-test/store/word-level-result/word-level-result.reducer';
import * as fromParagraphLevelResult from './views/literacy-test/store/paragraph-level-result/paragraph-level-result.reducer';

@NgModule({
  declarations: [AppComponent, LayoutComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(
      fromLetterLevelResult.letterLevelResultFeatureKey,
      fromLetterLevelResult.reducer
    ), //add to import this because the letterLevelResult loading stte belongs to another module
    StoreModule.forFeature(
      fromWordLevelResult.wordLevelResultFeatureKey,
      fromWordLevelResult.reducer
    ), //add to import this because the letterLevelResult loading stte belongs to another module
    StoreModule.forFeature(
      fromParagraphLevelResult.paragraphLevelResultFeatureKey,
      fromParagraphLevelResult.reducer
    ), //add to import this because the letterLevelResult loading stte belongs to another module
    NgbModule,
    // StoreModule.forRoot({}, {}),
    // ToastNoAnimationModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    // { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }, //override global duration for snackbar
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
