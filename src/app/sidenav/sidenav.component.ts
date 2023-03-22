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
      icon: 'fa-solid fa-house',
      link: ''
    },
    {
      number: '2',
      name: 'Appoinments',
      icon: 'fa-solid fa-calendar-check',
      link: '/appoinments'
    },
    {
      number: '3',
      name: 'Medical Bills',
      icon: 'fa-solid fa-money-bill-1',
      link: '/bills'
    },
    {
      number: '4',
      name: 'Medical Reports',
      icon: 'fa-solid fa-file-pdf',
      link: '/reports'
    },
    {
      number: '5',
      name: 'Medications',
      icon: "fa-solid fa-pills",
      link: '/pharmacy'
    },
    {
      number: '6',
      name: 'Doctor',
      icon: "fa-solid fa-user-doctor",
      link: '/doctor'
    }
  ];
}
