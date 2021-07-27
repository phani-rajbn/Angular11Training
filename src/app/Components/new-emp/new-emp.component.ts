import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../Entities/employee';

@Component({
  selector: 'new-emp',
  templateUrl: './new-emp.component.html',
  styleUrls: ['./new-emp.component.css']
})
export class NewEmpComponent implements OnInit {
  @Output() onNewEmp : EventEmitter<Employee> = new EventEmitter<Employee>(); 
  id : number = 0;
  name : string ="";
  address : string ="";
  salary : number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  //Some action done by the user when he clicks a button
  onAddEmployee(){
    let emp = new Employee(this.id, this.name, this.address, this.salary);
    this.onNewEmp.emit(emp);
  }

}
/*
Event Emitter is an interface object that will provide event feature to UR component. 
Events are actions performed by the user on the component. 
 */