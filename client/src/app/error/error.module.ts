import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404ViewComponent} from './view/error-404-view.component';
import {Error500ViewComponent} from './view/error-500-view.component';

const routes: Routes = [
  {path: '', redirectTo: '404', pathMatch: 'full'},
  {path: '404', component: Error404ViewComponent},
  {path: '500', component: Error500ViewComponent},
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
})
export class ErrorModule {}
