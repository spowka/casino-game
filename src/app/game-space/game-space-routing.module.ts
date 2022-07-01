import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSpaceComponent } from './containers/game-space/game-space.component';

const routes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  { path: ':category', component: GameSpaceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameSpaceRoutingModule { }
