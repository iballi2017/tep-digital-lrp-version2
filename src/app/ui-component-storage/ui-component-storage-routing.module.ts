import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidingSidenavComponent } from './sliding-sidenav/sliding-sidenav.component';
import { UiComponentStorageComponent } from './ui-component-storage.component';

const routes: Routes = [
  {
    path: '',
    component: UiComponentStorageComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sliding-sidenav' },
      { path: 'sliding-sidenav', component: SlidingSidenavComponent },
      // { path: 'levels/paragraph', component: ParagraphComponent },
      // { path: 'levels/word', component: WordComponent },
      // { path: 'levels/story', component: StoryComponent },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiComponentStorageRoutingModule { }
