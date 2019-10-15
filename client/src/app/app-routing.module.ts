import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard]},
  {path: 'sign', loadChildren: './sign/sign.module#SignModule'},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
