import { Component } from '@angular/core';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent {
  displayStyle = "none";
  sideNavStatus: boolean = true;

  openPopup(){
    this.displayStyle= "block";
  }
  closePopup(){
    this.displayStyle = "none";
  }

  lis = [
    {
      name: 'Paracip',
      MRP : '10',
      strength : '100mg'
    },

    {
      name: 'Calpol',
      MRP : '50',
      strength : '40mg'
    },
    {
      name: 'Xanax',
      MRP : '100',
      strength : '10mg'
    }
  ]
}
