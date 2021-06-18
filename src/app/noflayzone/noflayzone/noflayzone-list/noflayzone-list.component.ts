import { Component, OnInit } from '@angular/core';
import { INoflayzone } from '../../Model/noflayzone';
import { NoflayzoneService } from '../noflayzone.service';

@Component({
  selector: 'app-noflayzone-list',
  templateUrl: './noflayzone-list.component.html',
  styleUrls: ['./noflayzone-list.component.scss']
})
export class NoflayzoneListComponent implements OnInit {
  noflyzoneLists: INoflayzone[];
  constructor(private noflyzoneService: NoflayzoneService) { }

  ngOnInit(): void {
    this.getAllNoflyzone();
  }

  getAllNoflyzone(){
    this.noflyzoneService.getAllNoflyzone().subscribe(noflyzone => {
      this.noflyzoneLists = noflyzone;
      console.log(this.noflyzoneLists);
    }, error =>{
      console.log(error);
    });
  }

  deleteNoflyzone(id: number){
    console.log(id);
    this.noflyzoneService.removeNoflayzone(id).subscribe(response =>{
      console.log("deleted");
      this.getAllNoflyzone();
    },error=>{
      console.log(error);
    });
  }
}
