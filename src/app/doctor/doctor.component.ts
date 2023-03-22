import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
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
      name: '1234',
      MRP : 'Heni Prajapati',
      strength : 'Checked'
    },

    {
      name: '1345',
      MRP : 'Aparna Kholia',
      strength : 'To be checked'
    },
    {
      name: '2039',
      MRP : 'Ayaan Khan',
      strength : 'Checked'
    },
    {
      name: 'Jaynit Patel',
      MRP: 'Jaynit Patel',
      strength: 'To be checked'
    }
  ]

}
