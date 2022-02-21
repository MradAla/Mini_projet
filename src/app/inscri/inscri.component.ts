import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-inscri',
  templateUrl: './inscri.component.html',
  styleUrls: ['./inscri.component.css']
})
export class InscriComponent implements OnInit {

  element: any;

  constructor(private log:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  valider(f:NgForm){
    
    let elements : any;
    let validation = true;
    let ad = f.value["email"];
    let nom = f.value["name"];
    let psw = f.value["password"];
    let c_psw = f.value["c_password"];
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
      
    
      if(re.test(ad) == false || ad.length == 0){
        this.element = document.getElementById("email") as HTMLElement;
        this.element.style.borderBottom = "1px solid red";
        validation = false;
      }else{
        this.element = document.getElementById("email") as HTMLElement;
        this.element.style.borderBottom = "1px solid green";
      }
      if(nom.length == 0 ){
        this.element = document.getElementById("name") as HTMLElement;
        this.element.style.borderBottom = "1px solid red";
        validation = false;
      }else{
        this.element = document.getElementById("name") as HTMLElement;
        this.element.style.borderBottom = "1px solid green";
      }
      if(psw.length == 0){
        this.element = document.getElementById("password") as HTMLElement;
        this.element.style.borderBottom = "1px solid red";
        validation = false;
      }else{
        this.element = document.getElementById("password") as HTMLElement;
        this.element.style.borderBottom = "1px solid green";
      }
      if(psw.length == 0){
        this.element = document.getElementById("password") as HTMLElement;
        this.element.style.borderBottom = "1px solid red";
        validation = false;
      }else{
        this.element = document.getElementById("password") as HTMLElement;
        this.element.style.borderBottom = "1px solid green";
      }if(c_psw.length == 0 || c_psw != psw){
        this.element = document.getElementById("c_password") as HTMLElement;
        this.element.style.borderBottom = "1px solid red";
        validation = false;
      }else{
        this.element = document.getElementById("c_password") as HTMLElement;
        this.element.style.borderBottom = "1px solid green";
      }
    return validation;
  }

  signup(f:NgForm){
    if(this.valider(f) == true){

      let nom = f.value["name"];
      let email = f.value["email"];
      let psw = f.value["password"];
      this.log.setUser(nom, email, psw).subscribe();
      sessionStorage.setItem('adresse', email);
      sessionStorage.setItem('isloggedIn', "true");
          window.location.reload()
          this.router.navigate(['/produit']).then(() => {
            window.location.reload()
          });
    }
  }

}
