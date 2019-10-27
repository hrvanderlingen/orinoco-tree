import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoleculesComponent } from './molecules.component';

const routes: Routes = [{ path: '', component: MoleculesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoleculesRoutingModule { }
