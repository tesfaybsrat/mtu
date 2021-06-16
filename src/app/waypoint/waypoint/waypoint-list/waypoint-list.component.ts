import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IWayPoint } from '../../Model/wayPoint';
import { WaypointService } from '../waypoint.service';

@Component({
  selector: 'app-waypoint-list',
  templateUrl: './waypoint-list.component.html',
  styleUrls: ['./waypoint-list.component.scss']
})
export class WaypointListComponent implements OnInit {
  
  constructor(private wayPointService: WaypointService) { }
  
  public wayPoints: IWayPoint[];
 
  ngOnInit(): void {
    this.getAllWayPoints();
  }

  getAllWayPoints(){
    this.wayPointService.getAllWayPoints().subscribe(response =>{
    this.wayPoints = response;
    console.log(this.wayPoints);
    });
  }

  deleteWayPoint(id: string){
    console.log(id);
    this.wayPointService.removeWayPoint(id).subscribe(respose =>{
      this.getAllWayPoints();
    });
  }

}
