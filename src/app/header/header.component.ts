import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sideNavToogled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  name:any=localStorage.getItem("user")
  role:any=localStorage.getItem("role")
  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToogled.emit(this.menuStatus)
  }

  logout(){
    localStorage.clear()
    window.location.replace("http://localhost:4200/login")
  }

}
