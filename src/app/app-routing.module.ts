import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';
import { InscriComponent } from './inscri/inscri.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ModifproduitComponent } from './modifproduit/modifproduit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BuyComponent } from './buy/buy.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'inscri', component: InscriComponent },
  { path: 'listp', component: ListproduitComponent },
  { path: 'addp', component: AddproduitComponent },
  { path: 'modifp/:id', component: ModifproduitComponent },
  { path: 'buy/:id', component: BuyComponent },
  { path: 'commandes', component: PanierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
