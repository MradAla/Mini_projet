import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProduitComponent,
    InscriComponent,
    ListproduitComponent,
    AddproduitComponent,
    ModifproduitComponent,
    AccueilComponent,
    BuyComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
