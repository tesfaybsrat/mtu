import { Component, OnInit } from '@angular/core';
import { ICertificate } from '../../Model/certificate';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.scss']
})
export class CertificateListComponent implements OnInit {
  certificateLists: ICertificate[];
  constructor(private certificateService: CertificateService) { }

  ngOnInit(): void {
    this.getAllCertificate();
  }

  getAllCertificate(){
    this.certificateService.getAllCertificate().subscribe(certificate =>{
      this.certificateLists = certificate;
      console.log(this.certificateLists);
    }, error=>{
      console.log(error);
    });
  }

  onsubmit(id: number){
    console.log(id);
  }

  deleteCertificate(id: number){
    
  }

}


