import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // 토큰이 유효할 경우 main 화면으로 이동
  {path: '', loadChildren: './layout/layout.module#LayoutModule'},
  {path: 'sign', loadChildren: './sign/sign.module#SignModule'},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
