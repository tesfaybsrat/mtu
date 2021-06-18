import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { CertificateEditComponent } from './certificate-edit/certificate-edit.component';
import { CertificateAddComponent } from './certificate-add/certificate-add.component';

const routes: Routes =[
  {path: '', component: CertificateListComponent},
  {path: ':id', component: CertificateEditComponent},
  {path: ':add/new', component: CertificateAddComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CertificateRoutingModule { }
