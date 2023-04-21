import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Input() sideNavStatus: boolean = false;
  list=[{
    number: '1',
    name: 'Home',
    icon: 'fa-solid fa-house',
    link: '/home'
  }]
  ngOnInit():void{
    if(localStorage.getItem("role")== "doctor"){
      this.list=this.doctor_list
    }else{
      this.list=this.user_list;
    }
  }
  user_list=[
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house',
      link: '/home'
    },
    {
      number: '2',
      name: 'Files',
      icon: 'fa-solid fa-file',
      link: '/reports'
    },
    {
      number: '3',
      name: 'Medical Bills',
      icon: 'fa-solid fa-money-bill-1',
      link: '/accounts'
    }
  ];
  doctor_list = [
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house',
      link: '/home'
    },
    {
      number: '2',
      name: 'Files',
      icon: 'fa-solid fa-file',
      link: '/reports'
    },
    {
      number: '3',
      name: 'Medical Bills',
      icon: 'fa-solid fa-money-bill-1',
      link: '/accounts'
    },
    {
      number: '4',
      name: 'Laboratory',
      icon: 'fa-solid fa-file-pdf',
      link: '/laboratory'
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
