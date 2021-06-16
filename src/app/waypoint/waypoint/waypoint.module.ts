import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaypointListComponent } from './waypoint-list/waypoint-list.component';
import { WaypointRoutingModule } from './waypoint-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WaypointAddComponent } from './waypoint-add/waypoint-add.component';
import { WaypointEditComponent } from './waypoint-edit/waypoint-edit.component';



@NgModule({
  declarations: [
    WaypointListComponent,
    WaypointAddComponent,
    WaypointEditComponent    
  ],
  imports: [
    CommonModule,
    WaypointRoutingModule,
    SharedModule
  ]
})
export class WaypointModule { }
