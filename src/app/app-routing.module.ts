import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { PageNotFoundComponent } from './shared/shared.views/page-not-found/page-not-found.component';
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
  {
    path: 'practicals',
    loadChildren: () =>
      import('./practicals/practicals.module').then(
        (m) => m.PracticalsModule
      ),
  },
  {
    path: 'component-storage',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('src/app/ui-component-storage/ui-component-storage.module').then(
        (m) => m.UiComponentStorageModule
      ),
  },
  {
    path: 'shared/new-task-loading/:game-level/:stageNumber/:gameType',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./shared/shared.module').then((s) => s.SharedModule),
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
