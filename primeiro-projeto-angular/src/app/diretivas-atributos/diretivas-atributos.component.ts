import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {

  isActive: boolean = true;
  heightPx: string = "20px";
  backgroundColor: string = "green";
  nome: string = "";
  list: Array<{ nome: string }> = [];
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    setInterval( () => {
      if(this.isActive){
        this.isActive = false;
      } else {
        this.isActive = true;
      }

      if(this.heightPx == "20px"){
        this.heightPx = "50px";
        this.backgroundColor = "grey";
      } else {
        this.heightPx = "20px";
        this.backgroundColor = "green";
      }
    }, 2000);
  }

  adicionarNome(){
    this.list.push({ nome: this.nome });
    this.nome = "";
  }

}
