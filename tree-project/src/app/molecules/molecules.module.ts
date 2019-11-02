import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RscService } from './../_service/rsc.service';

import { MoleculesRoutingModule } from './molecules-routing.module';
import { MoleculesComponent } from './molecules.component';
import { LoadingStrategy } from './../_helper/loading.strategy';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpConfigInterceptor} from './../interceptor/httpconfig.interceptor';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [MoleculesComponent],
  imports: [
    CommonModule,
    MoleculesRoutingModule,
    NgxPaginationModule
  ],

  providers: [
    RscService, LoadingStrategy,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }   
  ]
})
export class MoleculesModule { }
