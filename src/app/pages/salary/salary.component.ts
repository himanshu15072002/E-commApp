import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent  implements OnInit{


   salaryObj: any={
    
      "salaryId": 0,
      "employeeId": 0,
      "salaryDate": "",
      "totalAdvance": 0,
      "presentDays": 0,
      "salaryAmount": 0
    
   }

   totalAdvanceAmount:number=0;
   totalLeacves: number=0;
   salaryArray: any [] =[];
   employeeArray: any[]=[];


   constructor(private empSer:ServiceService,private http:HttpClient){

   }

   ngOnInit(): void {
    this.getAllSalary();
    this.loadAllEmp();
   }
   loadAllEmp(){
    this.empSer.getAllEmployee().subscribe((res:any)=>{
       this.employeeArray = res.data
    })
   }
   getAllSalary(){
    this.http.get('https://onlinetestapi.gerasim.in/api/TeamSync/GetAllSalary').subscribe((res:any)=>{
      console.log(res.data)
      this.salaryArray = res.data;
    })
   }

   onSave(){

   }
   onUpdate(){

   }
   getEmpData(){
    this.GetAllAdvance();
    this.GetAllLeaves();

   }

   GetAllAdvance(){
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAdvance").subscribe((res:any)=>{
          const data = res.data.filter((m:any)=> m.employeeId == this.salaryObj.employeeId);
          data.forEach((element:any) => {
             this.totalAdvanceAmount = this.totalAdvanceAmount + element.advenceAmount;
          });
          this.salaryObj.totalAdvance = this.totalAdvanceAmount;
          this.salaryObj.presentDays = 30 - this.totalLeacves;
        })
   }
   GetAllLeaves(){
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllLeaves").subscribe((res:any)=>{
      this.totalLeacves =  res.data.filter((m:any)=> m.employeeId == this.salaryObj.employeeId).length;
       
  })
   }

   calculateSalary(){
     const empData = this.employeeArray.find(m=>m.empId == this.salaryObj.employeeId)
     const perDaySalary = empData.salary/30;
     
     
     this.salaryObj.salaryAmount = (this.salaryObj.perDaySalary * perDaySalary)-this.salaryObj.totalAdvance;
  
    }
}
