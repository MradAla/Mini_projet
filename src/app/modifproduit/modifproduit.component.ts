import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifproduit',
  templateUrl: './modifproduit.component.html',
  styleUrls: ['./modifproduit.component.css']
})
export class ModifproduitComponent implements OnInit {

  img : any;
  id = 0;
  produit : Produit[] = [];

  constructor(private prod: ProduitService,private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.prod.getProduit().subscribe(data =>  this.produit = data );
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.produit[this.id].img_dir = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.img = <File>event.target.files[0];
    }
    else { 
      
    }
  }

  modif(f:NgForm){
    let fd = new FormData();
    
    if(this.img){
      fd.append('image', this.img, this.img.name);
      this.prod.uploadImage(fd).subscribe();
      this.prod.updateProduit(this.produit[this.id].nom.toUpperCase(), this.produit[this.id].ref, this.produit[this.id].disc , this.produit[this.id].quant, this.produit[this.id].prix, this.img.name).subscribe() ;
      this.router.navigate(['/listp']);
    }else{
      
      this.prod.updateProduitWithoutIMG(this.produit[this.id].nom.toUpperCase(), this.produit[this.id].ref, this.produit[this.id].disc , this.produit[this.id].quant, this.produit[this.id].prix).subscribe() ;
      this.router.navigate(['/listp']);
    }
  }

}
