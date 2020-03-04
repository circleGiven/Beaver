import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {HeaderModule} from '../common/header/header.module';
import {FooterModule} from '../common/footer/footer.module';
import {NavigateModule} from '../common/navigate/navigate.module';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: 'database', loadChildren: () => import('../database/database.module').then(m => m.DatabaseModule)},
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
    RouterModule.forChild(routes)
  ],
  declarations: [
    MainComponent
  ],
  providers: [],
})
export class MainModule {}
