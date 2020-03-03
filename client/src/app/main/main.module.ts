import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainViewComponent} from './view/main-view.component';
import {BattleShipViewComponent} from './view/azurlane/battle-ship-view.component';
import {HeaderModule} from './component/header/header.module';
import {FooterModule} from './component/footer/footer.module';
import {NavigateModule} from './component/navigate/navigate.module';
import {MainComponent} from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: BattleShipViewComponent}
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
    MainComponent,
    MainViewComponent,
  ],
  providers: [],
})
export class MainModule {}
