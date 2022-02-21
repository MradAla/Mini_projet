import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits : Produit[] = [];

  constructor(private prod: ProduitService, private router:Router) { }

  ngOnInit(): void {
    this.prod.getProduit().subscribe(data =>  this.produits = data );
  }

 

}
