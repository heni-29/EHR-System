import { Component } from '@angular/core';

@Component({
  selector: 'app-prescribe-medicines',
  templateUrl: './prescribe-medicines.component.html',
  styleUrls: ['./prescribe-medicines.component.css']
})
export class PrescribeMedicinesComponent {
  sideNavStatus: boolean = true;
  dropdownList:any[] = [];
  selectedItems:Array<string>=[];
  dropdownSettings = {};
  constructor() { 
  }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Paracetamol (500mg) Tablet' },
      { item_id: 2, item_text: 'Magnesium (250mg) Tablet' },
      { item_id: 3, item_text: 'Parapain (100mg) Tablet' },
      { item_id: 4, item_text: 'La (500mg) Tablet' },
      { item_id: 5, item_text: 'Buffen (2500mg) Tablet' },
      { item_id: 6, item_text: 'CIPRO (500mg) Tablet' },
      { item_id: 7, item_text: 'Quenin (250mg) Tablet' },
      { item_id: 8, item_text: 'Penecilin (200mg) Tablet' },
      { item_id: 9, item_text: 'Bactrim (200mg) Tablet' },
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
