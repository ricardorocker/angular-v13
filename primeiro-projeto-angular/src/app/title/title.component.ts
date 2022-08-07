import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  title: string = "";

  // Seção 03 Ciclo de Vida: ngOnChanges
  @Input() subTitle: string = "Estudando Angular";

  constructor() { }

  ngOnInit(): void {
    this.title = "Bem vindo";
  }

  // Seção 03 Ciclo de Vida: ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    console.log("subTitle foi alterado de 'Estudando Angular' para 'Curso de Angular' no app.component");
  }

}
