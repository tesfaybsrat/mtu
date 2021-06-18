import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IWayPoint } from '../../Model/wayPoint';
import { WaypointService } from '../waypoint.service';

@Component({
  selector: 'app-waypoint-add',
  templateUrl: './waypoint-add.component.html',
  styleUrls: ['./waypoint-add.component.scss']
})
export class WaypointAddComponent implements OnInit {
  
  wayPointForm: FormGroup;
  wayPoint: IWayPoint;
  
  constructor(private waypointService: WaypointService) { }

  ngOnInit(): void {
    this.createWayPointForm();
  }

  createWayPointForm(){
    this.wayPointForm = new FormGroup({
      missionId: new FormControl('',[Validators.required]),
      // latitude: new FormControl('',[Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      latitude: new FormControl('',[Validators.required]),
      longitude: new FormControl('',[Validators.required]),
      altitude: new FormControl('',[Validators.required])      
    });
  }

  onSubmit(){
    //console.log(this.wayPointForm.value);
    this.waypointService.addWayPoint(this.wayPointForm.value).subscribe(response=>{
      console.log(response);

    });
  }

}
