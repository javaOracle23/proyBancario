import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tarjetacredito } from '../model/tarjetacredito';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TarjetacreditoService {

  private baseUrl = 'http://localhost:8080/api/tarjetas';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { console.log('Servicio TarjetaCredito Funcionando'); }

  headers: HttpHeaders = new HttpHeaders({    
    'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Content-Type'
  });
 

  public selectedTarjetaCredito: Tarjetacredito = {
    id: null,   
    numero: '',
    franquisia: '',
    cupo: '',
    fechaVencimiento: '',
    idCliente: ''   
  };

   
   getTarjetaCredito(idcliente: String): Observable<Tarjetacredito> {    
    return this.http.get<Tarjetacredito>(`${this.baseUrl}/${idcliente}`);
   }

   createTarjetaCredito(tarjetaCredito: Tarjetacredito): Observable<Tarjetacredito> {
    return this.http.post<Tarjetacredito>(this.baseUrl, tarjetaCredito, {headers: this.httpHeaders});
   }

   updateTarjetaCredito(tarjetaCredito: Tarjetacredito): Observable<Tarjetacredito> {
    return this.http.put<Tarjetacredito>(this.baseUrl, tarjetaCredito, {headers: this.httpHeaders});
  }


}
