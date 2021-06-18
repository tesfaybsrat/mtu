import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment'
import { IWayPoint } from '../Model/wayPoint'
import { Observable } from 'rxjs'

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class WaypointService {
  baseUrl = environment.apiUrl
  constructor(private http: HttpClient, private router: Router) {}

  getWayPointById(id: any): Observable<IWayPoint> {
    return this.http.get<IWayPoint>(this.baseUrl + 'waypoint/' + id);
  }

  getAllWayPoints(): Observable<IWayPoint[]> {
    return this.http.get<IWayPoint[]>(this.baseUrl + "waypoint");
  }
  
  addWayPoint(value: any){
     return this.http.post(this.baseUrl + "waypoint" , value);
  }

  removeWayPoint(id : string){
     return  this.http.delete(this.baseUrl + "waypoint/" + id);
  }

  updateWayPoint(id: any, value: IWayPoint): Observable<IWayPoint> {
    return this.http.put<IWayPoint>(this.baseUrl + 'waypoint/' + value.id, value);
  }
}
