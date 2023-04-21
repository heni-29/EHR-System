import { Component, Input } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { File } from '../file';
import { Pharmacy } from '../pharmacy';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  displayStyle = "none";
  sideNavStatus: boolean = true;
  dataList:Array<File>
  file = new File()
  constructor(private _service : RegistrationService) { 
  }

  temp:any;  
  ngOnInit(): void {
    if(localStorage.getItem("user")==undefined){
      window.location.replace("http://localhost:4200/login")
    }
    if(localStorage.getItem("role")!="doctor"){
      alert("Access Denied")
      window.location.replace("http://localhost:4200/home")
    }
    this.loadData()
  }

  loadData(){
    this.temp = localStorage.getItem("user")
    this._service.getFilesByDoctor(this.temp).subscribe(
      data =>{
        this.dataList = data
        console.log(this.dataList)        
      },
      error => alert("server error")
    )
  }
  openPopup(){
    this.displayStyle= "block";
  }
  closePopup(){
    this.displayStyle = "none";
  }

  viewFile(id:any){
    localStorage.setItem("file",id)
  }


}
