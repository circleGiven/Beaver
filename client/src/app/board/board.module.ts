import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BoardComponent} from './board.component';
import {HeaderComponent} from './component/header.component';
import {SideBarComponent} from './component/side-bar.component';
import {FooterComponent} from './component/footer.component';
import {MainViewComponent} from './view/main-view.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {BattleShipViewComponent} from './view/azurlane/battle-ship-view.component';
import {MenuComponent} from './component/menu.component';

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
    RouterModule.forChild(routes)
  ],
  declarations: [
    BoardComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    MainViewComponent,
    MenuComponent
  ],
  providers: [],

})
export class BoardModule { }
