import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { data } from 'jquery';
import { BaseData } from '../basedata';

@Component({
  selector: 'app-view-lab',
  templateUrl: './view-lab.component.html',
  styleUrls: ['./view-lab.component.css']
})
export class ViewLabComponent {
  sideNavStatus:boolean = true;
  displayStyle = "none";

  constructor(private _service : RegistrationService) { 
  }
  file_val:any;

  dataList:Array<BaseData>;
  loadData(){
    this._service.getRecordsById(this.file_val).subscribe(
      data=>{this.dataList=data;console.log(this.dataList)}
    )
  }

  viewFile(data:any){
    // var img = new Image()
    // img.src = data
    // var w = window.open("");
    // w?.document.write(img.outerHTML)
    // // console.log(data)
    // // window.open(data,"_blank")
    var file = this.temp(data)
    console.log(file)

    const link = document.createElement("a")
    link.href = URL.createObjectURL(file)
    link.download=file.name
    link.click()
    URL.revokeObjectURL(link.href);

  }

  temp(data:any){
    var arr = data.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], "report", {type:mime});
  }

}
