import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { TarjetacreditoService } from '../../services/tarjetacredito.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styles: []
})
export class ListClientesComponent implements OnInit {

  clientes: Cliente[];
  pageActual: number = 1;
  public myCounter: number = 0;
  addForm: FormGroup;
  allForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private serviceCliente: ClienteService, private serviceTarjeta: TarjetacreditoService) {  }

  onSubmitConsultar() {
     console.log('verdatos' + this.addForm.value.identificacion ); 
     this.clientes = null;    
     this.clientes = new Array<Cliente>();    
     this.serviceCliente.getClienteByIdentificacion(this.addForm.value.identificacion.toString())
     .subscribe(data => (this.clientes[0] = data));
  }

  onSubmitTodos() {
     this.serviceCliente.getClientes().subscribe(data => (this.clientes = data));
  }


  ngOnInit() {
  
  	 this.serviceCliente.getClientes().subscribe(data => (this.clientes = data));
     this.addForm = this.formBuilder.group({     
      identificacion: ['', Validators.required]
      
    });
    this.allForm = this.formBuilder.group({       
      
    });
  }

  editarCliente(cliente: Cliente): void { 

  	this.serviceCliente.selectedCliente = Object.assign({}, cliente);
     this.serviceTarjeta.getTarjetaCredito(this.serviceCliente.selectedCliente.id.toString())
     .subscribe(data => (this.serviceTarjeta.selectedTarjetaCredito = data));    
     cliente = this.serviceCliente.selectedCliente;
  }

}
