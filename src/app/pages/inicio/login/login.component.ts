import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/loginModel';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  resultado?: any;
  data: LoginModel = new LoginModel();
  hide = true;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  async onSubmit(){
    const resultLogin = await this.loginService.login(this.data).toPromise();
    this.resultado = resultLogin;
    if(this.resultado.idToken){
      localStorage.setItem('token', this.resultado.idToken);
    //  sessionStorage.setItem('token', this.resultado.idToken);
        this.router.navigate(['main']);
    }
  }

}
