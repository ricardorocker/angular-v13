import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- Seção 03 Ciclo de Vida: ngDoCheck -->
  {{ valor }}
  <button (click)="adicionar()">Adicionar</button>
  <!-- Seção 03 Ciclo de Vida: ngOnChanges -->
  <app-title *ngIf="!destruir" subTitle="Curso de Angular"></app-title>
  <!-- Seção 03 Ciclo de Vida: ngOnDestroy -->
  <br>
  <button (click)="destruirComponent()">Destruir Componente</button>
  <router-outlet></router-outlet>
  `

})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  destruir: boolean = false;
  valor: number = 1;

  constructor() { }

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

