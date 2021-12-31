import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }


  listAll(){
    return this.http.get<any>(`${this.baseUrl}/persona`);
  }

  save(data: any){
    return this.http.post<any>(`${this.baseUrl}/persona/roger/10`, data);
  }

  delete(id:any){
    return this.http.delete<any>(`${this.baseUrl}/persona/eliminar/${id}`);
  }
}
