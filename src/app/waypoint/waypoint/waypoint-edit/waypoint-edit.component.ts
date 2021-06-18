import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IWayPoint } from '../../Model/wayPoint';
import { WaypointService } from '../waypoint.service';

@Component({
  selector: 'app-waypoint-edit',
  templateUrl: './waypoint-edit.component.html',
  styleUrls: ['./waypoint-edit.component.scss']
})
export class WaypointEditComponent implements OnInit {

  constructor(private wayPointService: WaypointService, private activeRoute: ActivatedRoute) { }
  wayPointEditForm: FormGroup;
  waypointDetail : IWayPoint;

  ngOnInit(): void {   
     const id = this.activeRoute.snapshot.paramMap.get('id');
    // this.activeRoute.paramMap.subscribe(parameterMap => {
    //   const id = +parameterMap.get('id');
    //   this.loadWayPoint(id);
    // });
   this.loadWayPoint(id);
  }
  
  createWayPointEditForm(){
    this.wayPointEditForm = new FormGroup({
      missionId: new FormControl('',[Validators.required]),
      latitude: new FormControl('',[Validators.required]),
      longitude: new FormControl('',[Validators.required]),
      altitude: new FormControl('',[Validators.required])
  });
}

loadWayPoint(id:any){  
  console.log("mis id = "+ id);  
    this.wayPointService.getWayPointById(id).subscribe((waypoint : IWayPoint) => {
      this.waypointDetail = waypoint;
      console.log("way point detail "+this.waypointDetail);
  }, error =>{
    console.log(error);
  });
    
}

onSubmit(){
  return this.wayPointService.updateWayPoint(this.activeRoute.snapshot.paramMap.get('id'), this.wayPointEditForm.value).subscribe(response =>{
    console.log(response);
  })
}

}
