import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  imgSrc: string = "assets/images/image_placeholder.jpg";
  img : any;
  produit : Produit[] = [];

  constructor(private prod: ProduitService,private activatedRoute:ActivatedRoute, private router:Router) { }


  ngOnInit() {
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.img = <File>event.target.files[0];
    }
    else {
      this.imgSrc = 'assets/images/image_placeholder.jpg';
    }
  }

  ajouter(f:NgForm){
    let fd = new FormData();
    fd.append('image', this.img, this.img.name);
    console.log(f.value["nom"].toUpperCase(), f.value["ref"].toUpperCase(), f.value["disc"],parseInt(f.value["quant"]), parseInt(f.value["prix"]), this.img.name);
    if(this.img){
      this.prod.uploadImage(fd).subscribe();
      this.prod.ajouterProduit(f.value["nom"].toUpperCase(), f.value["ref"].toUpperCase(), f.value["disc"],parseInt(f.value["quant"]), parseInt(f.value["prix"]), this.img.name).subscribe() ;
      this.router.navigate(['/listp']);
    }

  }  

}
