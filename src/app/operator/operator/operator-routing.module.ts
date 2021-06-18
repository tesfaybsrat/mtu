import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { OperatorEditComponent } from './operator-edit/operator-edit.component';
import { OperatorAddComponent } from './operator-add/operator-add.component';

const routes: Routes = [
  {path: '', component: OperatorListComponent},
  {path: ':id', component: OperatorEditComponent},
  {path: ':add/new', component: OperatorAddComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class OperatorRoutingModule { }
