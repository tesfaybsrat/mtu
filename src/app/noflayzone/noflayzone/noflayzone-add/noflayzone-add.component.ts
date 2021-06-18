import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoflayzoneService } from '../noflayzone.service';

@Component({
  selector: 'app-noflayzone-add',
  templateUrl: './noflayzone-add.component.html',
  styleUrls: ['./noflayzone-add.component.scss']
})
export class NoflayzoneAddComponent implements OnInit {

  constructor(private noflyzoneService: NoflayzoneService) { }

  noflyzoneForm: FormGroup;
  
  ngOnInit(): void {
    this.createNoflyzoneForm();
  }

  createNoflyzoneForm(){
    this.noflyzoneForm = new FormGroup ({
      name: new FormControl('', [Validators.required]),
      latitude: new FormControl('', [Validators.required]),
      longitude: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
      radius: new FormControl('', [Validators.required])
    });
  }

  onSubmit(){
    this.noflyzoneService.addNewNoflyzone(this.noflyzoneForm.value).subscribe(noflyzone=>{
      console.log(noflyzone);
    }, error=>{
      console.log(error);
    });
  }


}
