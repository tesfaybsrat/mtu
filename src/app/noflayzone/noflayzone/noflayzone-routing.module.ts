import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoflayzoneListComponent } from './noflayzone-list/noflayzone-list.component';
import { NoflayzoneEditComponent } from './noflayzone-edit/noflayzone-edit.component';
import { NoflayzoneAddComponent } from './noflayzone-add/noflayzone-add.component';
 
const routes: Routes = [
  {path: '', component: NoflayzoneListComponent},
  {path: ':id', component: NoflayzoneEditComponent},
  {path: ':add/new', component: NoflayzoneAddComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule]
})
export class NoflayzoneRoutingModule { }
