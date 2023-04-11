import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DoctorViewDetailsComponent } from './doctor-view-details/doctor-view-details.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PrescribeMedicinesComponent } from './prescribe-medicines/prescribe-medicines.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'pharmacy', component:PharmacyComponent },
  { path: 'accounts', component:AccountsComponent },
  { path: 'pharmacy', component: PharmacyComponent},
  { path: 'doctor', component: DoctorComponent},
  { path: 'view-details', component: DoctorViewDetailsComponent},
  {path:'prescribe-medicines', component: PrescribeMedicinesComponent},
  {path:'receipt', component: ReceiptComponent},
  {path:'laboratory', component: LaboratoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
