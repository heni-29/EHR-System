import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new User();
  loginStatus:any;
  constructor(private _service : RegistrationService) { 
  }

  ngOnInit(): void {
    if(localStorage.getItem("user")!=undefined){
      window.location.replace("http://localhost:4200/home")
    }
  }
  onSignup() {
    this.user.role="random"
    this._service.SignUpUserRemote(this.user).subscribe(
      data => alert("Account Created Successfully"),
      error => alert("User"+this.user.email+" Already exists")
    )
    this.user = {
      email:'',
      password:'',
      role:'',
    }
  }
  role:User;
  onLogin() {
    localStorage.setItem("user",this.user.email)
    localStorage.setItem("password",this.user.password)
    this._service.LoginUserRemote(this.user).subscribe(
      data => {
        console.log(data)
        this.role=data
        localStorage.setItem("role",this.role.role)
        window.location.replace("http://localhost:4200/home")
        // alert("Login Successfull")          
      },
      error => {
        localStorage.clear();
        alert("Invalid Username and Password")
      }
    )
    this.user = {
      email:'',
      password:'',
      role:'',
    }
    

  }

}
