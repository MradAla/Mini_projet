import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private _url = "http://localhost:3000/Api/commande";
  private _url2 = "http://localhost:3000/Api/cmd";
  private _urlAdd = "http://localhost:3000/Api/add/cmd";

  constructor(private http : HttpClient) { }

  getCmd(){ 
    return this.http.get<any>(this._url);
  };

  getCmdByIdUser(){
    let id_user : any;
    id_user = sessionStorage.getItem('id_user');
    id_user = parseInt(id_user);
    let params = new HttpParams();

    params = params.append("id_user", id_user);
    const url = `${this._url2}/${id_user}`;
    
    return this.http.get<any>(url,{params: params});
  }

  setEtat(id:number, etat:String){
    const url = `${this._url2}/${id}/${etat}`;
    
    return this.http.post<any>(url,{id,etat});
  }

  setCommande(id_p:number, nom_p:String, quant:number, prix:number, id:number,img_dir:String){
    let user :any; 
    let id_u : any;
    user = sessionStorage.getItem('adresse');
    id_u = sessionStorage.getItem('id_user');
    id_u = parseInt(id_u);
    img_dir = img_dir.slice(14, img_dir.length);
    const url = `${this._urlAdd}/${user}/${nom_p}/${prix}/${quant}/${img_dir}/${id_u}/${id_p}/${id}`;
    console.log(user,nom_p,prix,quant,img_dir,id_u,id_p,id);
    return this.http.post<any>(url,{user,nom_p,prix,quant,img_dir,id_u,id_p,id});
  }

}
