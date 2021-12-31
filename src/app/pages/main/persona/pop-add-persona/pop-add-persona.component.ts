import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-pop-add-persona',
  templateUrl: './pop-add-persona.component.html',
  styleUrls: ['./pop-add-persona.component.scss']
})
export class PopAddPersonaComponent implements OnInit {
titulo: string;
  formGruop: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private matRef: MatDialogRef<PopAddPersonaComponent>
  ) {
    
  this.formGruop = this.formBuilder.group ({
   dni: [],
   nombres: [],
   apellidoPaterno:[],
   apellidoMaterno: [],
   edad: []
  });

  }

  ngOnInit(): void {
    if (this.data) {
     console.log(this.data);

     this.formGruop.get('dni').setValue(this.data.dni);
     this.formGruop.get('nombres').setValue(this.data.nombres);
     this.formGruop.get('apellidoPaterno').setValue(this.data.apellidoPaterno);
     this.formGruop.get('apellidoMaterno').setValue(this.data.apellidoMaterno);
     this.formGruop.get('edad').setValue(this.data.edad);

    } else {

      this.titulo = 'Agregar';
    }
  }

  save(fg: FormGroup){
if(fg.invalid){
  return;
}
const data =  {
  "id": this.data ? this.data.id : undefined,
  "nombres": this.formGruop.get('nombres').value,
  "apellidoPaterno": this.formGruop.get('apellidoPaterno').value,
  "apellidoMaterno": this.formGruop.get('apellidoMaterno').value,
  "dni": this.formGruop.get('dni').value,
  edad: this.formGruop.get('edad').value
}

this.personaService.save(data).subscribe(response =>{
 this.matRef.close(true);
});

  }

}
