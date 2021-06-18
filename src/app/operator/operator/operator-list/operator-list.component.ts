import { Component, OnInit } from '@angular/core';
import { IOperator } from '../../Model/operator';
import { OperatorService } from '../operator.service';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss']
})
export class OperatorListComponent implements OnInit {
  operators: IOperator[];
  constructor(private operatorService: OperatorService) { }

  ngOnInit(): void {
    this.getAllOperators();
  }

  getAllOperators(){
    this.operatorService.getAllOperators().subscribe(operator =>{
      this.operators = operator;
      console.log(this.operators);
    }, error =>{
      console.log(error);
    });
  }

  deleteCertificate(id: number){
    
  }

}
