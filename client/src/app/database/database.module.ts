import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DockyardViewComponent} from './view/dockyard-view.component';
import {EquipmentViewComponent} from './view/equipment-view.component';
import {EventViewComponent} from './view/event-view.component';
import {SearchModule} from '../common/search/search.module';
import {TitleModule} from '../common/title/title.module';
import {DockyardDetailViewComponent} from './view/dockyard-detail-view.component';
import {ItemModule} from './component/item/item.module';
import {TierComponent} from '../common/tier/tier.component';

const routes: Routes = [
  {path: '', redirectTo: 'dockyard', pathMatch: 'full'},
  {path: 'dockyard', component: DockyardViewComponent},
  {path: 'dockyard/:id', component: DockyardDetailViewComponent},
  {path: 'equipment', component: EquipmentViewComponent},
  {path: 'event', component: EventViewComponent},
];

@NgModule({
  imports: [
    SearchModule,
    TitleModule,
    ItemModule,
    RouterModule.forChild(routes)
  ],
    declarations: [
        DockyardViewComponent,
        EquipmentViewComponent,
        EventViewComponent,
        DockyardDetailViewComponent,
        TierComponent
    ]
})
export class DatabaseModule {}
