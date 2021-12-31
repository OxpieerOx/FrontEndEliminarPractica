import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IClienteResponse } from 'src/app/interfaces/clienteResponse';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listCliente: Array<IClienteResponse> = [];
  constructor(
private clienteService: ClienteService

  ) { }

  ngOnInit(): void {
    this.list();
  }


  async list(){
    const resutlList = await this.clienteService.listAll().toPromise();
    console.log(resutlList);
    this.listCliente = resutlList;
  }

   list2(){
    this.clienteService.listAll().subscribe(respose =>{
      console.log(respose);
      this.listCliente = respose;
    });
   
  }


}
