import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WaypointListComponent } from './waypoint-list/waypoint-list.component';

const routes: Routes = [
  {path: '', component: WaypointListComponent},
  {path: 'waypoint', component: WaypointListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WaypointRoutingModule { }
