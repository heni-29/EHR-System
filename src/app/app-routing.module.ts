import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'pharmacy', component:PharmacyComponent },
  { path: 'accounts', component:AccountsComponent },
  { path: 'pharmacy', component: PharmacyComponent},
  { path: 'doctor', component: DoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
