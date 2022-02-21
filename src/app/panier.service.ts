import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _url = "http://localhost:3000/Api/panier";
  private _urlAdd = "http://localhost:3000/Api/add/panier";

  constructor(private http : HttpClient) { }

  getPanier(){
    let user :any; 
    user = sessionStorage.getItem('adresse');
    let params = new HttpParams();

    params = params.append("user", user);
    const url = `${this._url}/${user}`;
    
    return this.http.get<any>(url,{params: params});
  };

  setPanier(id:number, nom:String, quant:number, prix:number, img_dir:String){
    let user :any; 
    user = sessionStorage.getItem('adresse');
    img_dir = img_dir.slice(14, img_dir.length );
    const url = `${this._urlAdd}/${id}/${nom}/${quant}/${prix}/${img_dir}/${user}`;
    
    return this.http.post<any>(url,{id,nom,quant,prix,img_dir,user});
  };
}
