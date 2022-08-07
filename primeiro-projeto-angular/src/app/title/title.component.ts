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
    this.title = "title.component: Bem vindo";
  }

  // Seção 03 Ciclo de Vida: ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    console.log("title.component: subTitle foi alterado de 'Estudando Angular' para 'Curso de Angular' no app.component");
  }

}
