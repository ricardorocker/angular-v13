import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- Seção 03 Ciclo de Vida: ngDoCheck -->
  {{ valor }}
  <button (click)="adicionar()">Adicionar</button>
  <!-- Seção 03 Ciclo de Vida: ngOnChanges -->
  <app-title subTitle="Curso de Angular"></app-title>
  <router-outlet></router-outlet>
  `

})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  valor: number = 1;

  constructor() {}

  // Seção 03 Ciclo de Vida: ngOnInit
  ngOnInit(): void {
    console.log("app.component: ngOnInit Executado!");

    setTimeout(() => {
      console.log("app.component: 5 segundos.");
    }, 5000)
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

  adicionar(): number{
    return this.valor += 1;
  }
}

