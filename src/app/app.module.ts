import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { ListClientesComponent } from './components/list-clientes/list-clientes.component';


// Importar rutas
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

// Importar ReactiveFormsModule para los formularios
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditClienteComponent } from './components/edit-cliente/edit-cliente.component';



@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    NavbarComponent,
    AddClienteComponent,
    ListClientesComponent,
    EditClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
