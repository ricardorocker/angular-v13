import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- Seção 03 Ciclo de Vida: ngOnChanges -->
  <app-title subTitle="Curso de Angular"></app-title>
  <router-outlet></router-outlet>`

})
export class AppComponent implements OnInit {
  constructor() {}

  // Seção 03 Ciclo de Vida: ngOnInit
  ngOnInit(): void {
    console.log("ngOnInit Executado!");

    setTimeout(() => {
      console.log("5 segundos.");
    }, 5000)
  }
}
