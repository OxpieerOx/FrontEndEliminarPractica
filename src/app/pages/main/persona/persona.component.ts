import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PersonaService } from 'src/app/service/persona.service';
import { PopAddPersonaComponent } from './pop-add-persona/pop-add-persona.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  displayedColumns: string[] = ['nro', 'nombres', 'paterno', 'materno', 'dni', 'edad', 'acciones'];
  dataSource :MatTableDataSource<any>;
  listaPersona: any[] = [];



  constructor(
    private dialog: MatDialog,
    private personaService: PersonaService
  ) {
  }

  async ngOnInit() {
    this.listAll();
  }


  onSubmit = async (fg: FormGroup) => {
 
  }

  async listAll(){
    const req = await this.personaService.listAll().toPromise();
    this.listaPersona = req;
    this.dataSource = new MatTableDataSource(this.listaPersona);
  }

  add(){
    const addDialog = this.dialog.open(PopAddPersonaComponent, {
      width:'60%',
      disableClose: true
    });

    addDialog.beforeClosed().subscribe(result=>{
      if(result){
        this.listAll();
      }
     
    });
  }

  edit(item: any, index: number){
    const addDialog = this.dialog.open(PopAddPersonaComponent, {
      width:'60%',
      disableClose: true,
      data: item
    });

    addDialog.beforeClosed().subscribe(result=>{
      if(result){
        this.listAll();
      }
     
    });
  }

  eliminar(element:any , index:number){
    const id = element.id
    this.personaService.delete(id).subscribe(data=>{
        alert("se elimino correctamente");
    },error=>{
        alert("Error")
    })
  }
}
