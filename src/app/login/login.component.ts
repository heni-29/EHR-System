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
  }
  onSignup() {
    this._service.SignUpUserRemote(this.user).subscribe(
      data => console.log("Response recieved"),
      error => console.log("Exception occured")
    )
    this.user = {
      email:'',
      password:'',
      role:'',
    }
  }
  onLogin() {
    localStorage.setItem("user",this.user.email)
    localStorage.setItem("password",this.user.password)
    this._service.LoginUserRemote(this.user).subscribe(
      data => {
        if(data){
          window.location.replace("http://localhost:4200/home")      
        }
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
