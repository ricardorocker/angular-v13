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

  <app-input [valorRecebido]="valorEnviado"></app-input>
  <button (click)="addValor()">Adicionar 1</button>

  <hr>
  <h1>Output</h1>
  <ng-template [ngIf]="getDados">
  <h2>{{ getDados.nome }}</h2>
  <h3>{{ getDados.idade }}</h3>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>

  <router-outlet></router-outlet>
  `

})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  destruir: boolean = false;
  valor: number = 1;
  valorEnviado = 10;
  getDados: { nome: string, idade: number } | undefined;

  constructor() { }

  setDados(event: { nome: string, idade: number }){
    this.getDados = event;
  }

  addValor(): void {
    this.valorEnviado += 1;
  }

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

