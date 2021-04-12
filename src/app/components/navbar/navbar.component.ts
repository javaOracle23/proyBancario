import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  public app_name = 'Banco';
  public isLogged = false;

  constructor(private router: Router) {
    console.log('contru nav isLogged:' + this.isLogged);

   }

  ngOnInit() {  
    this.onCheckUser();
  }

  onLogout(): void {    
    localStorage.removeItem('isLogged');    
    location.reload();
 }

  onCheckUser(): void {  

    let loginActivo = localStorage.getItem('isLogged');     
    this.isLogged = (loginActivo != null && loginActivo.toString() != '')? true:false;
    if(loginActivo){
      this.router.navigate(['navbar']);
    }else{
      this.router.navigate(['login']);
    }    
  }

  


}
