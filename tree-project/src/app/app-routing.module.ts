import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { HomeComponent } from './home/home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { Role } from './model/role';
import { AuthGuard } from './_helper/auth.guard';
import { LoadingStrategy } from './_helper/loading.strategy';


const routes: Routes = [
 {
    path: '',
    component: HomeComponent  
  } ,
  {
    path: 'trees/home',
    component: HomeComponent  
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
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin]},
},
 { 
   path: 'molecule-list', 
   loadChildren: () => import('./molecules/molecules.module').then(m => m.MoleculesModule),
   data: {preload: true}
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: LoadingStrategy})
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }

