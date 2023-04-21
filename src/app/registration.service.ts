import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { File } from './file';
import { Pharmacy } from './pharmacy';
import { Lab } from './Lab';
import { BaseData } from './basedata';
import { Account } from './account';

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

  public createLab(lab:Lab){
    return this._http.post("http://localhost:9000/ehr/api/records",lab)
  }

  public getFileById(id:any):Observable<any>{
    return this._http.get("http://localhost:9000/ehr/api/files/user/"+id)
  }

  public updateStatus(id:any,file:any):Observable<any>{
    return this._http.post("http://localhost:9000/ehr/api/files/status/"+id,file)
  }

  public getAllTests(id:any):Observable<any>{
    return this._http.get("http://localhost:9000/ehr/api/records/file/"+id)
  }

  public updateRecords(id:any,datas:BaseData):Observable<any>{
      return this._http.put("http://localhost:9000/ehr/api/records/"+id,datas)
  }

  public getAllRecords():Observable<any>{
    return this._http.get("http://localhost:9000/ehr/api/records")
  }

  public addAccounts(data:Account):Observable<any>{
    return this._http.post("http://localhost:9000/ehr/api/accounts",data)
  }

  public getRecordsById(id:any,user:any):Observable<any>{
    return this._http.get("http://localhost:9000/ehr/api/records/file/"+id+","+user)
  }
}
