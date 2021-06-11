import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaypointListComponent } from './waypoint-list/waypoint-list.component';
import { WaypointRoutingModule } from './waypoint-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    WaypointListComponent    
  ],
  imports: [
    CommonModule,
    WaypointRoutingModule,
    SharedModule
  ]
})
export class WaypointModule { }
