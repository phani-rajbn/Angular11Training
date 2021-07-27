import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Entities/employee';//Refering the employee class in ur component....

@Component({
  selector: 'app-emp-manager',
  templateUrl: './emp-manager.component.html',
  styleUrls: ['./emp-manager.component.css']
})

export class EmpManagerComponent implements OnInit {
  empList: any = []; //Array of Employees....
  searchCriteria : string = "";
  foundEmp  : Employee;
  constructor() {
    this.foundEmp = new Employee(0, "", "", 0);
  }

  //ngOnInit is a function that is internally called by the Angular when U load the component into the application. It is a function defined in OnInit interface which is the part of the angular Core library. A Class that implements OnInit must define a function called ngOnInit which would contain the initialization required for the Component's data. 
  ngOnInit(): void {
    //Use ngOnInit for initialization of the data members...
      //this.empList = [];//Initialize the data 
      this.empList.push(new Employee(123, "Phaniraj", "Bangalore", 56000));//Adds the element to the bottom of the list...
      this.empList.push(new Employee(124, "Sunder", "Mysore", 46000));
      this.empList.push(new Employee(125, "Ramesh", "Chennai", 33000));
      this.empList.push(new Employee(126, "Shushant", "Pune", 67000));
      this.empList.push(new Employee(127, "Somnath", "Mumbai", 15000));
  }
  
  /////////////////////////Older Syntax for finding records/////////////////////////////////////////////////
  // find(id : number): Employee{
  //   // for(let i = 0; i < this.empList.length; i++){
  //   //   if(this.empList[i].empId === id)
  //   //     return this.empList[i];
  //   // }
  //   let foundEmp = this.empList.find(emp => emp.empId === id);
  //   return foundEmp;
  // }

  ///////////////////////////Finding using lambda expression/////////////////////////////////////////////
  //=> means goes to give U..... 
  find = (id : number) => this.foundEmp = this.empList.find((emp: Employee) => emp.empId === id);
  ////////////////////Event handler for adding new Employee/////////////////////////////
  addNewEmp(emp : Employee){
    this.empList.push(emp);
    alert("Employee added to the database");
  }
}

/*
$event is the built in value that contains the data that is emitted by  the specific event 
*/
