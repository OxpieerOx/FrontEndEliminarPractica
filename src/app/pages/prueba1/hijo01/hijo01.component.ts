import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo01',
  templateUrl: './hijo01.component.html',
  styleUrls: ['./hijo01.component.scss']
})
export class Hijo01Component implements OnInit {

  @Input() tipo :
  | 'id'
  | 'nombres'
  | 'apellidos'
  | 'material' = 'id';

  @Input() mostrarA = true;

  @Input() label: string = '';

  @Input() apariencia: 
  | 'standard'
  | 'fill' = 'standard'

  @Input() placeholder='';

  @Output("enviar-click") enviarClick: EventEmitter<any> = new EventEmitter();

  id?:number;
  nombres?: string;
  apellidos?: string;

  palabra?: string;

  constructor() {}

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.nombres);
  }

  clickMaterial(){
    this.enviarClick.emit(this.palabra ? this.palabra : null);
  }

}
