import { Commande } from './../commande';
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit';
import {Router, ActivatedRoute } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Panier } from '../panier';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  id = 0;
  quant = 1;
  commande : Commande[] = [];
  produit : Produit[] = [];

  constructor(private prod: ProduitService, private cmd: CommandeService,private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.prod.getProduit().subscribe(data =>  this.produit = data );
    this.cmd.getCmd().subscribe(data =>  this.commande = data );
  }

  commander(){
    this.cmd.setCommande(this.produit[this.id].id, this.produit[this.id].nom, this.quant, (this.produit[this.id].prix * this.quant), this.commande[this.commande.length - 1].id_order + 1, this.produit[this.id].img_dir).subscribe();  
    window.location.reload()
        this.router.navigate(['/commandes']).then(() => {
          window.location.reload()
        });
  }

}
