import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { attendance, IAttendance } from 'src/app/classes/employee';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit{

  attendanceArray: IAttendance []=[];
  attendanceObj: attendance = new attendance();
  employeeArray: any []=[];


  constructor(private empSrv:ServiceService,
    private http:HttpClient ){

  }
  ngOnInit(): void {
    this.loadAllAttendance();
      this.getEmployee();
  }

  loadAllAttendance(){
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAttendance").subscribe((res:any)=>{
      this.attendanceArray = res.data;
    })
  }

  getEmployee(){
    this.empSrv.getAllEmployee().subscribe((result:any)=>{
            this.employeeArray = result.data;
    })
  }

  onEdit(id:number){

  }


  onDelete(id:number){

  }

  onSave(){
     this.http.post("https://onlinetestapi.gerasim.in/api/TeamSync/AddAttendance",this.attendanceObj).subscribe((Res:any)=>{
           if(Res.result){
            this.loadAllAttendance();
            this.attendanceObj= new attendance();
           }
           else{

           }
           alert(Res.message)
     })
  }


  onUpdate(){

  }

}
