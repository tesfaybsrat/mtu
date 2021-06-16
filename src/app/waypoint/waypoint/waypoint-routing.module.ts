import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WaypointListComponent } from './waypoint-list/waypoint-list.component';
import { WaypointEditComponent } from './waypoint-edit/waypoint-edit.component';
import { WaypointAddComponent } from './waypoint-add/waypoint-add.component';

const routes: Routes = [
   {path: '', component: WaypointListComponent},
  // {path: '', component: WaypointAddComponent},
  {path: ':id', component: WaypointEditComponent},
  {path: ':waypointadd', component: WaypointAddComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WaypointRoutingModule { }
