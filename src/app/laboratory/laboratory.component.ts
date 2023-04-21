import { RegistrationService } from '../registration.service';
import { Component } from '@angular/core';
import { data, error } from 'jquery';
import { BaseData } from '../basedata';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent {
  sideNavStatus: boolean = true;
  dataList:Array<BaseData>
  filetoUpload : File | null;


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
    this._service.getAllRecords().subscribe(
      data => {
        console.log(data)
        this.dataList = data
      }
    )
  }


  datas:BaseData = new BaseData()
  ok:any;
  constructor(private _service : RegistrationService) { 
  }

  async UploadData(event:any,id:any){
    var basestr:any;
    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = await function(){
      // console.log(reader.result)
        basestr=reader.result
        // basestr=atob(basestr);
        // console.log(basestr)
    };
    await new Promise(r => setTimeout(r, 1000));

    
    this.ok=localStorage.getItem("user")
    // this.datas.user=this.ok;
    this.ok=localStorage.getItem("file_id")
    this.datas.file_id=this.ok
    this.datas.pdf=basestr

    this._service.updateRecords(id,this.datas).subscribe(
      data=>{alert("Report Uploaded Successfully");this.loadData()},
      error=>{console.log("error")}
    )

    
  }

  createData(val:any){

  }

}
