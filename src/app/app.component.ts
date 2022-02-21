import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'echri';

  test = sessionStorage.getItem('isloggedIn');
  adress = sessionStorage.getItem('adresse');

  constructor(private router:Router) { }

  logOut(){
    sessionStorage.removeItem('isloggedIn');
    sessionStorage.removeItem('adresse');
    this.router.navigate(['/']).then(() => {
      window.location.reload()
    });
  }
}
