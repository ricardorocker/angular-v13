import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  nome: string = "Ricardo S. Rocker";
  idade: number = 26;

  checkedDisabled: boolean = true;
  imgSrc: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/125px-Flag_of_Canada_%28Pantone%29.svg.png"
  imgAlt: string = "Bandeira do Canadá"

  constructor() { }

  ngOnInit(): void {
  }

  alertaInfo(valor: string){
    alert(valor)
  }

  alertaEvento(valor: MouseEvent){
    console.log(valor)
  }

}
