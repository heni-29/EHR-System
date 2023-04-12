import { Component } from '@angular/core';
import { Pharmacy } from '../pharmacy';
import { RegistrationService } from '../registration.service';
import { Account } from '../account';
import { data } from 'jquery';

@Component({
  selector: 'app-prescribe-medicines',
  templateUrl: './prescribe-medicines.component.html',
  styleUrls: ['./prescribe-medicines.component.css']
})
export class PrescribeMedicinesComponent {
  displayStyle = "none";
  sideNavStatus: boolean = true;
  pharmacy = new Pharmacy()
  selectedItems:Array<any>=[];
  drugs = ["abs","abc"]
  addDrug(){
    let value = this.pharmacy.name
    this.selectedItems.push(value);
    // console.log(this.selectedItems)
  }
  constructor(private _service : RegistrationService) { 
  }

  ngOnInit(): void {
    this.loadData()
  }
  allDrugs:Array<Pharmacy>;
  loadData(){
    this._service.loadPharmacyData().subscribe(
      data =>{
        this.allDrugs = data
        this.drugs=[]
        for(let i=0;i<this.allDrugs.length;i++){
          this.drugs.push(this.allDrugs[i].name)
        }
      },
      error => alert("server error")
    )
  }

  account = new Account()
  temp:any;
  sendToAccounts(){
    this.temp=localStorage.getItem("file");
    this.account.file_id = this.temp;
    this.account.cost=  Math.floor(Math.random() * (5000 - 100) + 100).toString()
    this.account.status="unpaid"
    this.temp=localStorage.getItem("user")
    this.account.user_id=this.temp

    this._service.addAccounts(this.account).subscribe(
      data => {console.log("success")}
    )


  }
  closePopup(){
    this.displayStyle = "none";
  }

  deleteDrug(item:any){
    this.selectedItems = this.selectedItems.filter(obj => obj!=item)
  }


}
