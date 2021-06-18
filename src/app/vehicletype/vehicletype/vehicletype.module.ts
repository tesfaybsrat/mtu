import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicletypeAddComponent } from './vehicletype-add/vehicletype-add.component';
import { VehicletypeListComponent } from './vehicletype-list/vehicletype-list.component';
import { VehicletypeEditComponent } from './vehicletype-edit/vehicletype-edit.component';



@NgModule({
  declarations: [
    VehicletypeAddComponent,
    VehicletypeListComponent,
    VehicletypeEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VehicletypeModule { }
