import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoleculesRoutingModule } from './molecules-routing.module';
import { MoleculesComponent } from './molecules.component';


@NgModule({
  declarations: [MoleculesComponent],
  imports: [
    CommonModule,
    MoleculesRoutingModule
  ]
})
export class MoleculesModule { }
