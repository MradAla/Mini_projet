import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users : Users[] = [];

  constructor(private login: LoginService, private router:Router) { }

  ngOnInit(): void {
    this.login.getLogin().subscribe(data =>  this.users = data );
  }


  signin(f:NgForm){

    

    let ad = f.value["Email"];
    let psw = f.value["Password"];
    let id = 0;
    var i = 0 ;
    var test = false;

    while(i < this.users.length && test == false){
      if(ad != this.users[i].email || psw != this.users[i].psw ){
        i  = i + 1;
      }else {
        id = this.users[i].id_user;
        test = true;
        sessionStorage.setItem('adresse', ad);
        sessionStorage.setItem('id_user', String(id));
        sessionStorage.setItem('isloggedIn', String(test));
        window.location.reload()
        this.router.navigate(['/accueil']).then(() => {
          window.location.reload()
        });
      }
      
    }

    


  
  }
}
