import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { ListClientesComponent } from './components/list-clientes/list-clientes.component';


export const ROUTES: Routes = [  
     { path: 'add-cliente', component: AddClienteComponent },   
    { path: 'list-clientes', component: ListClientesComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'login', component: LoginComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];