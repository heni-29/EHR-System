import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { AccountsComponent } from './accounts/accounts.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorViewDetailsComponent } from './doctor-view-details/doctor-view-details.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PrescribeMedicinesComponent } from './prescribe-medicines/prescribe-medicines.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
    SidenavComponent,
    PharmacyComponent,
    AccountsComponent,
    DoctorComponent,
    DoctorViewDetailsComponent,
    PrescribeMedicinesComponent,
    ReceiptComponent,
    LaboratoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
