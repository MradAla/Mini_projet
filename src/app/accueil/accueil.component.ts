import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  produits : Produit[] = [];

  constructor(private prod: ProduitService, private router:Router) { }

  ngOnInit(): void {
    this.prod.getProduit().subscribe(data =>  this.produits = data );
  }

}
