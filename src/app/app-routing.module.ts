import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'program-starter',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./views/program-starter/program-starter.module').then(
        (m) => m.ProgramStarterModule
      ),
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./views/user-account/user-account.module').then(
        (m) => m.UserAccountModule
      ),
  },
  {
    path: 'literacy',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./views/literacy-test/literacy-test.module').then(
        (m) => m.LiteracyTestModule
      ),
  },
  {
    path: 'numeracy',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./views/numeracy-test/numeracy-test.module').then(
        (m) => m.NumeracyTestModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
