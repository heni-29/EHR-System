import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { File } from './file';


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

}
