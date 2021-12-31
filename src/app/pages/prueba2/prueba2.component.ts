import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.scss']
})
export class Prueba2Component implements OnInit {

parametro?: string;

  constructor(
    public route: ActivatedRoute

  ) { 
    this.parametro = this.route.snapshot.paramMap.get("id") || '';
  }

  ngOnInit(): void {
  }

}
