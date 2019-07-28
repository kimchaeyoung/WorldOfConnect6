import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmokComponent } from './omok/omok.component';
import { ManagerComponent } from './manager/manager.component';
import { BattleComponent } from './battle/battle.component';

const routes: Routes = [
  { path: 'single_game/:id', component: OmokComponent },
  { path: 'double_game/:id', component: BattleComponent },
  { path: 'manager', component: ManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
