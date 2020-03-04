import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'database', loadChildren: () => import('./database/database.module').then(m => m.DatabaseModule)},
  {path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
