import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 {
    path: '',
    component: TreeComponent  
  } ,
  {
    path: 'trees/tree',
    component: TreeComponent  
  } ,
  {
    path: 'trees/placeholder',
    component: PlaceholderComponent  
  } , 
  {
    path: 'login',
    component: LoginComponent  
  } ,
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }

