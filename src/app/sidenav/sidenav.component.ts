import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() sideNavStatus: boolean = false;
  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house'
    },
    {
      number: '2',
      name: 'Appoinments',
      icon: 'fa-solid fa-calendar-check'
    },
    {
      number: '3',
      name: 'Medical Bills',
      icon: 'fa-solid fa-money-bill-1'
    },
    {
      number: '4',
      name: 'Medical Reports',
      icon: 'fa-solid fa-file-pdf'
    },
    {
      number: '5',
      name: 'Medications',
      icon: "fa-solid fa-pills"
    }
  ];
}
