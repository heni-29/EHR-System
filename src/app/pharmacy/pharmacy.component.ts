import { Component } from '@angular/core';
import { data } from 'jquery';
import { Pharmacy } from '../pharmacy';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent {
  displayStyle = "none";
  sideNavStatus: boolean = true;
  pharmacy = new Pharmacy()
  editIndex:any;
  dataList:Array<Pharmacy>;

  constructor(private _service : RegistrationService) { 
  }

  ngOnInit(): void {
    this.loadData()
  }

  addDrug(){
    this._service.CreateDrug(this.pharmacy).subscribe(
      data =>{
        alert("Successfull")
        this.clearData()
        this.loadData()
      },
      error => alert("server error")
    )
  }

  loadData(){
    this._service.loadPharmacyData().subscribe(
      data =>{
        this.dataList = data
      },
      error => alert("server error")
    )
  }

  updateDrug(){
    this._service.updateDrug(this.pharmacy,this.editIndex).subscribe(
      data=>{
        alert("Update Successfull")
        this.closePopup()
        this.clearData()
        this.loadData();

      },
      error=>alert("Server error")
    )
  }

  openPopup(i:any){
    this.editIndex=i
    this.displayStyle= "block";
  }
  closePopup(){
    this.displayStyle = "none";
  }

  clearData(){
    this.pharmacy.supplier=''
    this.pharmacy.name=''
    this.pharmacy.dose=''
    this.pharmacy.mrp=''
  }

  
}
