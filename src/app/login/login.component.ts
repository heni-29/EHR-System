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
  constructor(private _service : RegistrationService) { 
  }

  ngOnInit(): void {
  }
  onSignup() {
    this._service.SignUpUserRemote(this.user).subscribe(
      data => console.log("Response recieved"),
      error => console.log("Exception occured")
    )
  }
  onLogin() {
    //debugger
    

  }

}
