import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{


  employeeArray: any[] =[];
  employeeObj: any;
  constructor(private empSer: ServiceService){
this.resetObj();
  }
  resetObj() {
    this.employeeObj={
        "empId": 0,
        "empName": "",
        "empContactNo": "",
        "empAltContactNo": "",
        "empEmail": "",
        "addressLine1": "",
        "addressLine2": "",
        "pincode": "",
        "city": "",
        "state": "",
        "bankName": "",
        "iFSC": "",
        "accountNo": "",
        "bankBranch": "",
        "salary": 0
      }
  }

  ngOnInit(): void {
     this.loadAllEmployee();
  }
  loadAllEmployee(){
    this.empSer.getAllEmployee().subscribe((res:any)=>{
      this.employeeArray=res.data;
      // console.log(this.employeeArray)
    })
  }
  onSave(){
    // debugger;
    this.empSer.createEmployee(this.employeeObj).subscribe((res:any)=>{
      // debugger;
      if(res.result){
        this.loadAllEmployee();
        alert(res.message)
        this.resetObj()
      }
      else{
        alert(res.message)
      }
      // this.loadAllEmployee();
    })
  }

  onEdit(id:number){
  this.empSer.getEmpById(id).subscribe((res:any)=>{
         this.employeeObj=res.data
  })
  }

  onUpdate(){
    this.empSer.updateEmployee(this.employeeObj).subscribe((res:any)=>{
      // debugger;
      if(res.result){
        this.loadAllEmployee();
        alert(res.message)
        this.resetObj()
      }
      else{
        alert(res.message)
      }
      // this.loadAllEmployee();
    })
  }
  onDelete(empId:number){
     this.empSer.deleteEmpById(empId).subscribe((res:any)=>{
      if(res.result){
        this.loadAllEmployee();
        alert(res.message)
        // this.resetObj()
      }
      else{
        alert(res.message)
      }
     })
  }

}
