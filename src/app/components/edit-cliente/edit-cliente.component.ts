import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarjetacreditoService } from '../../services/tarjetacredito.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styles: []
})
export class EditClienteComponent implements OnInit {

   editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,
  private serviceCliente: ClienteService,private serviceTarjeta: TarjetacreditoService) { }

  ngOnInit() {
     //const customerId = localStorage.getItem('editClienteId');

 this.editForm = this.formBuilder.group({
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


   validarValor(valorSelect: string, valorForm: string): string {        
   	 return (valorForm != null && valorForm != ''?valorForm:valorSelect);
   }

   onSubmit() {

   		
   		 this.editForm.value.id = this.serviceCliente.selectedCliente.id;

 		this.editForm.value.nombres = this.validarValor(this.serviceCliente.selectedCliente.nombres,this.editForm.value.nombres);

        this.editForm.value.apellidos = this.validarValor(this.serviceCliente.selectedCliente.apellidos,this.editForm.value.apellidos);
        this.serviceCliente.selectedCliente.apellidos = this.editForm.value.apellidos;

        this.editForm.value.identificacion = this.validarValor(this.serviceCliente.selectedCliente.identificacion,this.editForm.value.identificacion);
        this.serviceCliente.selectedCliente.identificacion = this.editForm.value.identificacion;

        this.editForm.value.email = this.validarValor(this.serviceCliente.selectedCliente.email,this.editForm.value.email); 
        this.serviceCliente.selectedCliente.email = this.editForm.value.email;       

   		 //Actualizar cliente
       this.serviceCliente.updateCliente(this.editForm.value).subscribe
        (
          res =>{
          	console.log(res); 


          	this.editForm.value.idCliente = this.serviceCliente.selectedCliente.id;

          	this.editForm.value.id = this.serviceTarjeta.selectedTarjetaCredito.id;

          	this.editForm.value.numero = this.validarValor(this.serviceTarjeta.selectedTarjetaCredito.numero,this.editForm.value.numero);

          	this.editForm.value.franquisia = this.validarValor(this.serviceTarjeta.selectedTarjetaCredito.franquisia,this.editForm.value.franquisia);

			this.editForm.value.cupo = this.validarValor(this.serviceTarjeta.selectedTarjetaCredito.cupo,this.editForm.value.cupo);

			this.editForm.value.fechaVencimiento = this.validarValor(this.serviceTarjeta.selectedTarjetaCredito.fechaVencimiento,this.editForm.value.fechaVencimiento);

            //Actualizar tarjeta
            this.serviceTarjeta.updateTarjetaCredito(this.editForm.value).subscribe
            (
	          res =>{
	          console.log(res); 
	          },
	          err=>console.log(err)
            )
          },
          err=>console.log(err)
        )

   		this.router.navigate(['list-clientes']);


   }

   cerrar(): void {
    this.router.navigate(['list-clientes']);
  }

}
