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

  ngOnInit(): void {
    if(localStorage.getItem("user")==undefined){
      window.location.replace("http://localhost:4200/login")
    }
  }
  temp:any;
  createFile(){
    this.temp = localStorage.getItem("user")
    this.file.user_name = this.temp
    this.file.status="doctor1"
    console.log(this.file)
    this._service.CreateFile(this.file).subscribe(
      data => {
        alert("File Created Successfully")
      },
      error => alert("Server Error")
    )
  }
}
