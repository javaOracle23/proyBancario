import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { console.log('Servicio Cliente Funcionando'); }

  headers: HttpHeaders = new HttpHeaders({    
    'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Content-Type'

  });

   public selectedCliente: Cliente = {
    id: null,   
    nombres: '',
    apellidos: '',
    identificacion: '',
    email: ''   
  };


   getClientes(): Observable<Cliente[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Cliente[])
    );
   }

   getClienteByIdentificacion(identificacion: String): Observable<Cliente> {    
    return this.http.get<Cliente>(`${this.baseUrl}/${identificacion}`);
   }

   createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente, { headers: this.headers });
   }

   updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.baseUrl, cliente, { headers: this.headers });
  }

}
