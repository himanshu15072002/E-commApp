import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userObj: any = {
    username: '',
    password: ''
   
  }
  constructor(private router : Router){
    
  }
  onLogin(){
    if(this.userObj.username=="admin" && this.userObj.password=="112233"){
            this.router.navigateByUrl("dashboard")
    }
    else{
      alert("User name or password is worng")
    }
  }

}
