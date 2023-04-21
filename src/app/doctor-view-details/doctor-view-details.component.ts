import { animate } from '@angular/animations';
import { RegistrationService } from '../registration.service';
import { Component, OnInit } from '@angular/core';
import { data, error } from 'jquery';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Lab } from '../Lab';
import { File } from '../file';
import { delay } from 'rxjs';

@Component({
  selector: 'app-doctor-view-details',
  templateUrl: './doctor-view-details.component.html',
  styleUrls: ['./doctor-view-details.component.css']
})
export class DoctorViewDetailsComponent implements OnInit {
  dropdownList:any[] = [];
  sideNavStatus: boolean = true;
  selectedItems:Array<string>=[];
  file = new File()
  dropdownSettings = {};
  constructor(private _service : RegistrationService) { 
  }

  labList:Array<Lab>;

  loadLab(){
    this._service.getRecordsById(localStorage.getItem("file"),localStorage.getItem("user")).subscribe(
      data=>{this.labList=data},
      error=>{console.log("Server error")}
    )

  }
  ngOnInit() {
    if(localStorage.getItem("user")==undefined){
      window.location.replace("http://localhost:4200/login")
    }
    this.dropdownList = [
      { item_id: 1, item_text: 'Test 1' },
      { item_id: 2, item_text: 'Test 2' },
      { item_id: 3, item_text: 'Test 3' },
      { item_id: 4, item_text: 'Test 4' },
      { item_id: 5, item_text: 'Test 5' },
      { item_id: 6, item_text: 'Test 6' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.loadData()
    this.loadLab()
  }
  data = new Lab();
  temp:any = localStorage.getItem("user")
  async createLab(){
    for(let i=0;i<this.selectedItems.length;i++){
        this.data.user = this.file.user_id
        this.data.test=this.selectedItems[i]
        this.data.pdf=""
        this.data.file_id = localStorage.getItem("file")
        this._service.createLab(this.data).subscribe(
          data => {alert("Lab Request Created Successfully");this.updateStatus()},
          error => console.log("Exception occured")
        )
        // await delay(2000)
        // this.refresh()

    }
  }

  refresh(){
    window.location.replace("http://localhost:4200/view-details")
  }
  updateStatus(){
    this.file.status ="lab"
    this._service.updateStatus(localStorage.getItem("file"),this.file).subscribe(
      data=>{console.log("great")},
      error=>{console.log("error")}
    )
  }

  ifState(){
    if(this.file.status=="doctor1")return true;
    return false;
  }
  
  loadData(){
    this._service.getFileById(localStorage.getItem("file")).subscribe(
      data => {
        this.file = data;
        console.log(data)
        console.log(this.file)
        
      },
      error => console.log("Exception occured")
    )
  }

  onItemSelect(item: any) {
    console.log(typeof(item.item_text));
    this.selectedItems.push(item.item_text)
  }
  onSelectAll(items: any) {
    console.log(items);
    for(let i=0;i<items.length;i++){
      this.selectedItems.push(items[i].item_text)
    }
  }
  onDeselect(items:any){
    this.selectedItems = this.selectedItems.filter(obj=>obj!=items.item_text)
    console.log(this.selectedItems)
  }


}
