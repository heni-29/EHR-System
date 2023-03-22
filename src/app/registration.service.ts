import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public SignUpUserRemote(user: User):Observable<any>{
    return this._http.post("http://localhost:9000/ehr/api/users",user)
  }

  public loadAccountsData():Observable<any>{
    return this._http.get("http://localhost:9000/ehr/api/accounts")
  }

}
