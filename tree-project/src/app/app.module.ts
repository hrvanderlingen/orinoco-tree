import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { NodeService } from './node.service';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { LoginComponent } from './login/login.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoadingStrategy } from './_helper/loading.strategy';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularSplitModule } from 'angular-split';
import { SplitComponent } from './split/split.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    PlaceholderComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    SplitComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    AngularSplitModule.forRoot(),
    NgxExtendedPdfViewerModule,
  ],
  providers: [
    NodeService, LoadingStrategy,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
   
  }

}
