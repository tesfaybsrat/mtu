import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { INoflayzone } from '../Model/noflayzone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoflayzoneService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.apiUrl;

  getAllNoflyzone(): Observable<INoflayzone[]>{
    return this.http.get<INoflayzone[]>(this.baseUrl +"noflyzone");
  }

  getNoflyzoneById(id : number){
    return this.http.get(this.baseUrl +"noflyzone/"+id);
  }

  addNewNoflyzone(value: any){
    return this.http.post(this.baseUrl + "noflyzone", value);
  }

  removeNoflayzone(id: number){
    return this.http.delete(this.baseUrl +"noflyzone/"+ id);
  }
}
