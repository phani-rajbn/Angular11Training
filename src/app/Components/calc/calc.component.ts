import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html'
})

//OnInit interface has ngOnInit where we do initialization for UR component
export class CalcComponent{
  first : number = 0.0;
  second : number =0.0;
  result : number = 0.0;
  
  onAdd = (first : number, second : number ) =>  this.result = first + second; 
  
  onSubtract = (first: number, second: number) => this.result = first - second;
  
  onSqr = (num : number) => this.result = num * num ;

  onSqrt = (num : number) => this.result = Math.sqrt(num);
  //todo: write down the functions for multiply, divide, sqr and Sqrroot. 
}
