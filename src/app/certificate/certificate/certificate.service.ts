import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICertificate } from '../Model/certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  baseUrl= environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCertificateById(id: number){
    //return this.http.get<>
  }

  getAllCertificate(){
    return this.http.get<ICertificate[]>(this.baseUrl +'certificate');
  }
}
