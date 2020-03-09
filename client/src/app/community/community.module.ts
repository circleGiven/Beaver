import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchModule} from '../common/search/search.module';
import {TitleModule} from '../common/title/title.module';
import {FreeViewComponent} from './view/free-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'free', pathMatch: 'full'},
  {path: 'free', component: FreeViewComponent}
];

@NgModule({
  imports: [
    SearchModule,
    TitleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FreeViewComponent,
  ]
})
export class CommunityModule {}
