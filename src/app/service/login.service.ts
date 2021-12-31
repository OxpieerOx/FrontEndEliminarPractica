import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILoginRequest } from '../interfaces/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  login(data: ILoginRequest){
    return this.http.post<any>(`${this.baseUrl}/security/login`, data);
  }
}
