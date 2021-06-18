import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateAddComponent } from './certificate-add/certificate-add.component';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { CertificateEditComponent } from './certificate-edit/certificate-edit.component';
import { CertificateRoutingModule } from './certificate-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CertificateAddComponent,
    CertificateListComponent,
    CertificateEditComponent
  ],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    SharedModule
  ]
})
export class CertificateModule { }
