import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { File } from '../file';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  file = new File();
  sideNavStatus: boolean = true;
  constructor(private _service : RegistrationService) { 
  }
  temp:any;
  createFile(){
    this.temp = localStorage.getItem("user")
    this.file.user_name = this.temp
    this.file.status="doctor1"
    console.log(this.file)
    this._service.CreateFile(this.file).subscribe(
      data => console.log("Response recieved"),
      error => console.log("Exception occured")
    )
  }
}
