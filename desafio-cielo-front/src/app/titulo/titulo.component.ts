import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

  title = 'Desafio Cielo - Criação de API';
  
  constructor() { }

  ngOnInit() {
  }

}
