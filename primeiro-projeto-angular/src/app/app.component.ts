import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>LIFE CIRCLES em "app.component"</h1>
  <ul>
    <li>ngOnInit</li>
    <li>ngDoCheck</li>
    <li>ngAfterContentInit</li>
    <li>ngAfterContentChecked</li>
    <li>ngAfterViewInit</li>
    <li>ngAfterViewChecked</li>
    <li>ngOnDestroy</li>
  </ul>
  <!-- Seção 03 Ciclo de Vida: ngDoCheck -->
  {{ valor }}
  <button (click)="adicionar()">Adicionar</button>
  <!-- Seção 03 Ciclo de Vida: ngOnChanges -->
  <app-ciclo-vida *ngIf="!destruir" subTitle="Curso de Angular"></app-ciclo-vida>
  <!-- Seção 03 Ciclo de Vida: ngOnDestroy -->
  <br>
  <button (click)="destruirComponent()">Destruir Componente</button>
  <br><br>
  <hr>
  <h1>DATA BINDING</h1>
  <app-data-biding></app-data-biding>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-diretivas-atributos>
  <hr>
  <h1>DIRETIVAS DE ATRIBUTOS</h1>
  </app-diretivas-atributos>
  <app-new-component></app-new-component>
  <router-outlet></router-outlet>
  `

})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  destruir: boolean = false;
  valor: number = 1;

  constructor() { }

  // REvisão de conteudo

  // Seção 03 Ciclo de Vida: ngOnInit
  ngOnInit(): void {
    console.log("app.component: ngOnInit Executado!");

    setTimeout(() => {
      console.log("app.component: 5 segundos.");
    }, 5000)
  }


  // Seção 03 Ciclo de Vida: ngOnDestroy
  destruirComponent(): void {
    this.destruir = true;
  }


  // Seção 03 Ciclo de Vida: ngDoCheck
  ngDoCheck(): void {
    console.log("app.component: ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("app.component: ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("app.component: ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("app.component: ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("app.component: ngAfterViewChecked");
  }

  adicionar(): number {
    return this.valor += 1;
  }
}

