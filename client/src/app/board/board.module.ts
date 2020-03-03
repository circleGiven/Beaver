import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BoardComponent} from './board.component';
import {MainViewComponent} from './view/main-view.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {BattleShipViewComponent} from './view/azurlane/battle-ship-view.component';
import {HeaderModule} from './component/header/header.module';
import {FooterModule} from './component/footer/footer.module';
import {NavigateModule} from './component/navigate/navigate.module';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent,
    children: [
      {path: '', component: BattleShipViewComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule,
    HeaderModule,
    FooterModule,
    NavigateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BoardComponent,
    MainViewComponent,
  ],
  providers: [],
})
export class BoardModule { }
