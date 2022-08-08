import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  condition: boolean = true;
  conditionClick: boolean = true;
  list: Array<{ nome: string, idade: number }> = [
    { nome: "Ricardo Rocker", idade: 26 },
    { nome: "Petrucia Rocker", idade: 24 },
    { nome: "Amanda Rocker", idade: 22 },
  ];
  nome: string = "";

  constructor() { }

  ngOnInit(): void {
    setInterval( ()=>{
      if(this.condition){
      this.condition = false;
    } else {
      this.condition = true
    }
    }, 2000)
  }

  onClick() {
      if(this.conditionClick){
      this.conditionClick = false;
    } else {
      this.conditionClick = true
    }
  }

  onClickAddList() {
    this.list.push({nome: "Rosangela Rocker", idade: 44})
  }

  onClickEventList(event: MouseEvent){
    console.log(event);
  }

  onClickRemove(event: number){
    this.list.splice(event, 1)
  }
}
