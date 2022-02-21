import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from '../commande.service';
import { Commande } from '../commande';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cmds : Commande[] = [];

  constructor(private cmd: CommandeService, private router:Router) { }

  ngOnInit(): void {
    this.cmd.getCmd().subscribe(data =>  this.cmds = data );
    
  }

  setEtat(id:number, etat:String){
    this.cmd.setEtat(id,etat).subscribe();
    window.location.reload();
  }

 
}
