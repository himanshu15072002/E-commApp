import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdvanceComponent } from './pages/advance/advance.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LeavesComponent } from './pages/leaves/leaves.component';
import { LoginComponent } from './pages/login/login.component';
import { SalaryComponent } from './pages/salary/salary.component';

const routes: Routes = [
  {
    path: "login",
    component : LoginComponent
  },
  {
  path: "",
  component : LayoutComponent,
  children:[
    {
      path: "dashboard",
      component: DashboardComponent
    },{
      path: "employee",
      component: EmployeeComponent
    },
    {
      path: "attendance",
      component: AttendanceComponent
    },
    {
      path: "advance",
      component: AdvanceComponent
    },
    {
      path: "leaves",
      component: LeavesComponent
    },
    {
      path: "salary",
      component: SalaryComponent
    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
