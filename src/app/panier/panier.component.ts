import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande';



@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  commandes : Commande[] = [];
  total = 0;

  constructor(private cmd:CommandeService, private router:Router) { }

  ngOnInit(): void {
    this.cmd.getCmdByIdUser().subscribe(data => this.commandes = data);
  }

  

}
