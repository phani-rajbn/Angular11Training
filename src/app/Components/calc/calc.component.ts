import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html'
})

//OnInit interface has ngOnInit where we do initialization for UR component
export class CalcComponent{
  constructor() { }
  firstValue : number = 450;
  secondValue : number = 560;
  result : number = this.firstValue + this.secondValue;
  operand : string = "-";

  getResult(){
    switch(this.operand){
      case "+":
        this.result = this.firstValue + this.secondValue;
        break;
      case "-":
        this.result = this.firstValue - this.secondValue;
        break;
      case "*":
        this.result = this.firstValue * this.secondValue;
        break;
      case "/":
        this.result = this.firstValue / this.secondValue;
        break;                   
    }
  }
}
