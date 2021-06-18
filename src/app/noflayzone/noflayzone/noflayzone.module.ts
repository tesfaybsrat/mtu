import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoflayzoneAddComponent } from './noflayzone-add/noflayzone-add.component';
import { NoflayzoneListComponent } from './noflayzone-list/noflayzone-list.component';
import { NoflayzoneEditComponent } from './noflayzone-edit/noflayzone-edit.component';
import { NoflayzoneRoutingModule } from './noflayzone-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    NoflayzoneAddComponent,
    NoflayzoneListComponent,
    NoflayzoneEditComponent
  ],
  imports: [
    CommonModule,
    NoflayzoneRoutingModule,
    SharedModule
  ]
})
export class NoflayzoneModule { }
