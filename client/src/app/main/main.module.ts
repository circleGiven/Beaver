import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {HeaderModule} from '../common/header/header.module';
import {FooterModule} from '../common/footer/footer.module';
import {NavigateModule} from '../common/navigate/navigate.module';
import {MyPageComponent} from '../my-page/my-page.component';
import {TitleModule} from '../common/title/title.module';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: 'database', loadChildren: () => import('../database/database.module').then(m => m.DatabaseModule)},
      {path: 'community', loadChildren: () => import('../community/community.module').then(m => m.CommunityModule)},
      {path: 'my', component: MyPageComponent},
      {path: 'error', loadChildren: () => import('../error/error.module').then(m => m.ErrorModule)},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    NavigateModule,
    TitleModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    MainComponent,
    MyPageComponent
  ],
  providers: [],
})
export class MainModule {}
