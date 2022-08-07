import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit, OnChanges, OnDestroy {

  title: string = "";

  // Seção 03 Ciclo de Vida: ngOnChanges
  @Input() subTitle: string = "Estudando Angular";

  constructor() { }

  ngOnInit(): void {
    this.title = "ciclo-vida.component: Bem vindo";
  }

  // Seção 03 Ciclo de Vida: ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ciclo-vida.component: subTitle foi alterado de 'Estudando Angular' para 'Curso de Angular' no app.component");
  }

  // Seção 03 Ciclo de Vida: ngOnDestroy
  ngOnDestroy(): void {
    console.log("ciclo-vida.component: DESTRUIDO!")
  }

}
