import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<any>{
    // debugger
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllEmployee');
  }

  createEmployee(obj:any): Observable<any>{
    // debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/CreateEmployee',obj);
  }

  getEmpById(id:number){
     return this.http.get('https://asd888888888888onlinetestapi.gerasim.in/api/TeamSync/GetEmployeeByEmpId?empid='+id)
  }

  updateEmployee(obj:any): Observable<any>{
    // debugger
    return this.http.post('https://onlinetestapi.gerasim.in/api/TeamSync/UpdateEmployee',obj);
  }

  deleteEmpById(id:number){
    return this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/DeleteEmployeeByEmpId?empId='+id)
 }
  
}
