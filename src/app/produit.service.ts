import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private _url = "http://localhost:3000/Api/produit";
  private _urlUpload = "http://localhost:3000/Api/upload";
  private _urlAdd = "http://localhost:3000/Api/new/produit";
  private _urlRemove = "http://localhost:3000/Api/delete/produit";
  private _urlUpdate = "http://localhost:3000/Api/update/produit";
  

  constructor(private http : HttpClient) { }

  getProduit(){
    return this.http.get<any>(this._url);
  }

  ajouterProduit(nom:String,ref:String,disc:String,quant:number,prix:number,img_dir:String){
    const url = `${this._urlAdd}/${nom}/${ref}/${disc}/${quant}/${prix}/${img_dir}`;
    
    return this.http.post<any>(url,{nom,ref,disc,quant,prix,img_dir});
  }

  updateProduit(nom:String, ref:String, disc:String,quant:number,prix:number,img_dir:String){
    const url = `${this._urlUpdate}/${nom}/${ref}/${disc}/${quant}/${prix}/${img_dir}`;
  
    return this.http.post<any>(url,{nom,ref,disc,quant,prix,img_dir});
  }

  updateProduitWithoutIMG(nom:String, ref:String,disc:String,quant:number,prix:number){
    const url = `${this._urlUpdate}/${nom}/${ref}/${disc}/${quant}/${prix}`;
  
    return this.http.post<any>(url,{nom,ref,disc,quant,prix});
  }

  uploadImage(img: any){
    
    return this.http.post<any>(this._urlUpload, img);
  }

  removeProduit(id:number){
    const url = `${this._urlRemove}/${id}`;
    return this.http.delete<any>(url);
  }
}
