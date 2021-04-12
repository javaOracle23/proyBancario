import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { TarjetacreditoService } from '../../services/tarjetacredito.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styles: []
})
export class AddClienteComponent implements OnInit {

	addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private serviceCliente: ClienteService, private serviceTarjetaCredito: TarjetacreditoService) { 
    
  }

  ngOnInit() {

  	this.addForm = this.formBuilder.group({
      id: [],
      nombres: ['', [Validators.required]],
      apellidos: ['', Validators.required],
       identificacion: ['', Validators.required],
      email: ['', Validators.required],
      numero: ['', Validators.required],
      franquisia: ['', Validators.required],
      cupo: ['', Validators.required],
      fechaVencimiento: ['', Validators.required],
      idCliente : ['', Validators.required]    
    });
  }

  onSubmit() {

		//Guardar cliente
    this.serviceCliente.createCliente(this.addForm.value).subscribe(
    res =>{
    console.log(res);        
    this.serviceCliente.selectedCliente = Object.assign({}, res);        
    this.addForm.value.idCliente = this.serviceCliente.selectedCliente.id;

         //Guardar tarjeta credito
        this.serviceTarjetaCredito.createTarjetaCredito(this.addForm.value).subscribe(
          res =>{
          console.log(res);           
          },
          err=>console.log(err)
        )

    },
    err=>console.log(err)
    )

  }

}
