import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { File } from './file';
import { Pharmacy } from './pharmacy';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public SignUpUserRemote(user: User):Observable<any>{
    return this._http.post("http://localhost:9000/ehr/api/users",user)
  }

  public LoginUserRemote(user: User):Observable<any>{
    return this._http.post("http://localhost:9000/ehr/session/login",user)
  }

  public loadAccountsData():Observable<any>{
    return this._http.get("http://localhost:9000/ehr/api/accounts")
  }

  public CreateFile(file:File):Observable<any>{
    return this._http.post("http://localhost:9000/ehr/api/files",file)
  }

  public loadPharmacyData():Observable<any>{
    return this._http.get("http://localhost:9000/ehr/api/drugs")
  }

  public CreateDrug(drug:Pharmacy):Observable<any>{
    return this._http.post("http://localhost:9000/ehr/api/drugs",drug)
  }

  public updateDrug(drug:Pharmacy,id:any):Observable<any>{
    return this._http.put("http://localhost:9000/ehr/api/drugs/"+id,drug)
  }

  public getFilesByDoctor(doctor:string):Observable<any>{
    return this._http.get("http://localhost:9000/ehr/api/files/doctor/"+doctor)  
  }

  public updateAccountStatus(id:any):Observable<any>{
    return this._http.put("http://localhost:9000/ehr/api/accounts/"+id,Array<any>)
  }

}
