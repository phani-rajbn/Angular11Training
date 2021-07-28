import { Component, OnChanges } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html'
})

//OnInit interface has ngOnInit where we do initialization for UR component
export class CalcComponent{
  first : number = 0.0;
  second : number =0.0;
  result : number = 0.0;
  
  addFunc = (first: number, second: number) : number  => first + second;
  
  public onAdd = (first : number, second : number ) =>  this.result = first + second; 
  
  onSubtract = (first: number, second: number) => this.result = first - second;
  
  onSqr = (num : number) => this.result = num * num ;

  onSqrt = (num : number) => this.result = Math.sqrt(num);
  //todo: write down the functions for multiply, divide, sqr and Sqrroot. 
}
//mailto:phani.blrtraining@gmail.com