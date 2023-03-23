import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Account } from '../account';
import * as $ from "jquery";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  displayStyle = "none";
  sideNavStatus: boolean = false;
  accList: Array<Account> =[];

  unpaid(val:string){
    if(val=="unpaid")return true;
    return false;
  }
  constructor(private _service : RegistrationService) { 
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this._service.loadAccountsData().subscribe(
      data =>{
        this.accList = data
        this.populateTable();
      },
      error => alert("server error")
    )
  }

  updateStatus(id:any){
    this._service.updateAccountStatus(id).subscribe(
      data =>{
        alert("Successfull")
        this.loadData();
      },
      error => alert("server error")
    )
  }
  populateTable(){
    
  }

  openPopup(){
    this.displayStyle= "block";
  }
  closePopup(){
    this.displayStyle = "none";
  }

}
