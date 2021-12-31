import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Food {
  id: number;
  value: string;
}

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {
  hide = true;
  usuario: string;
  pass: string;
  capcha: string;
  mensaje: string;
  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contrasenia: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
  
  }

  onSumit(fg: FormGroup) {
    if (fg.invalid) {
      return;
    }
    if (this.usuario === 'admin' && this.pass === '123456') {
     
      this.router.navigate(['main']);
    }else{
     
    }


  }


}
