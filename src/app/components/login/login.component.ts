import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';
import { User } from '../../model/user';

import {first} from 'rxjs/operators';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})

export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private serviceUser: UserService) { }

  loginForm: FormGroup;  
  public isError = false;

  ngOnInit() {     
    this.loginForm = this.formBuilder.group({
      id: [],
      firstName: ['', [Validators.required,Validators.minLength(1)]],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  users: User;
  onLogin() {

    localStorage.removeItem('isLogged');        
    this.serviceUser.getUser(this.loginForm.value.firstName)
    .subscribe(data => {(this.serviceUser.selectedUser = data);      
      if(data == null){
        this.isError = true;     
      }else{
        if(data.password == this.loginForm.value.lastName){
        this.isError = false;     
        localStorage.setItem('isLogged', "true");  
        localStorage.setItem('token', data.token);             
        this.router.navigate(['navbar']);
        if (this.loginForm.valid) {
          console.log('estan vacios' + this.loginForm.valid);
        }else{
        console.log('error');
          this.onIsError();
        }
       location.reload();
      }else{
        this.isError = true;   
      }
      }   
    
    });   
   
    
  }  

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}
