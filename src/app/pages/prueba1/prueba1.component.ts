import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.scss']
})
export class Prueba1Component implements OnInit {

  titulo: string ;

  id: number;

  nombres?: string ;

  apellidos?: string ;

  edad: number;

  listaPersonas: any[] = [{id: 1, name: "persona1"},{id: 2, name: "persona2"},{id: 3, name: "persona3"}];

  lista: any[] = [1,2,4,4];

  constructor() { 
    this.titulo = "Esto es una pruebamde titulo padre";
    this.edad = 4;
    this.id = 9;
  }

  ngOnInit(): void {

    for(let persona of this.listaPersonas){

    }
  }

  enviar(){

    this.listaPersonas.push({id: this.id, name:this.nombres})
    console.log(this.listaPersonas);


  }

  recibirEvento(data: any){
    console.log("Buscando el dni: " +  data);
  }

}
