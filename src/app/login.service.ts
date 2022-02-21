import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url = "http://localhost:3000/Api/users";
  private _urlAdd = "http://localhost:3000/Api/new/user";

  constructor(private http : HttpClient) { }

  getLogin(){ 
    return this.http.get<any>(this._url);

  };

  setUser(nom:String,email:String,psw:String){
    const url =`${this._urlAdd}/${nom}/${email}/${psw}`;
   
    return this.http.post<any>(url, {nom,email,psw});
  }


}
