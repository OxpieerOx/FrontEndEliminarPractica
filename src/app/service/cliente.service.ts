import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IClienteResponse } from '../interfaces/clienteResponse';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = environment.baseNode;

  constructor(
    private http: HttpClient
  ) { }

  listAll(){
    return this.http.get<Array<IClienteResponse>>(`${this.baseUrl}/cliente`);
  }

  getClienteById(id: string){
    return this.http.get<IClienteResponse>(`${this.baseUrl}/cliente/${id}`);
  }
}
