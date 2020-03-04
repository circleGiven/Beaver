import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DockyardViewComponent} from './view/dockyard-view.component';
import {EquipmentViewComponent} from './view/equipment-view.component';
import {EventViewComponent} from './view/event-view.component';
import {SearchModule} from '../common/search/search.module';

const routes: Routes = [
  {path: '', redirectTo: 'dockyard', pathMatch: 'full'},
  {path: 'dockyard', component: DockyardViewComponent},
  {path: 'equipment', component: EquipmentViewComponent},
  {path: 'event', component: EventViewComponent},
];

@NgModule({
  imports: [
    SearchModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DockyardViewComponent,
    EquipmentViewComponent,
    EventViewComponent
  ]
})
export class DatabaseModule {}
