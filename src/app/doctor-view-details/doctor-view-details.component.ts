import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-doctor-view-details',
  templateUrl: './doctor-view-details.component.html',
  styleUrls: ['./doctor-view-details.component.css']
})
export class DoctorViewDetailsComponent implements OnInit {
  dropdownList:any[] = [];
  sideNavStatus: boolean = true;
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Test 1' },
      { item_id: 2, item_text: 'Test 2' },
      { item_id: 3, item_text: 'Test 3' },
    ];
    this.selectedItems = [
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
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


}
