import { animate } from '@angular/animations';
import { RegistrationService } from '../registration.service';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Lab } from '../Lab';
import { File } from '../file';

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

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Test 1' },
      { item_id: 2, item_text: 'Test 2' },
      { item_id: 3, item_text: 'Test 3' },
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
  }
  data = new Lab();
  temp:any = localStorage.getItem("user")
  createLab(){
    for(let i=0;i<this.selectedItems.length;i++){
        this.data.user = this.temp
        this.data.test=this.selectedItems[i]
        this.data.pdf=""
    
        this._service.createLab(this.data).subscribe(
          data => console.log("Response recieved"),
          error => console.log("Exception occured")
        )

    }

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


}
