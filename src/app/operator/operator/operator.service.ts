import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IOperator } from '../Model/operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllOperators(){
    return this.http.get<IOperator[]>(this.baseUrl +"operator");
  }

  
}
