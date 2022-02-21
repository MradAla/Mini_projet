import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {

  produits : Produit[] = [];

  public recherche : string = "";

  constructor(private prod: ProduitService, private router:Router) { }

  ngOnInit(): void {
    this.prod.getProduit().subscribe(data =>  this.produits = data );
  }

  remove(id:number){
    this.prod.removeProduit(id).subscribe();
    this.prod.getProduit().subscribe(data =>  this.produits = data );
    window.location.reload();
  }

}
