import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorAddComponent } from './operator-add/operator-add.component';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { OperatorEditComponent } from './operator-edit/operator-edit.component';
import { OperatorRoutingModule } from './operator-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    OperatorAddComponent,
    OperatorListComponent,
    OperatorEditComponent
  ],
  imports: [
    CommonModule,
    OperatorRoutingModule,
    SharedModule
  ]
})
export class OperatorModule { }
