import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Output() enviarDados = new EventEmitter();

  lista: Array<{ nome: string, idade: number }> = [
    { nome: "Ricardo Rocker", idade: 26 },
    { nome: "Petrucia Rocker", idade: 24 },
    { nome: "Amanda Rocker", idade: 22 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getDados(event: number) {
    this.enviarDados.emit(this.lista[event]);
    console.log(this.lista[event]);
  }

}
