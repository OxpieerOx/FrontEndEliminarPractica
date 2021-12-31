import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  constructor(
    private http: HttpClient
  ) { }

  enviarArchivoJava(file: File){
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.http.post<any>('http://localhost:8080/file',formData);
  }

  enviarArchivoAwsS3(file: File){
    const formData = new FormData();
    formData.append("KEY", "dasdasdasd");
    formData.append("file", file);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'URLFIRMA');
    xhr.send(formData);
  }

  
}
