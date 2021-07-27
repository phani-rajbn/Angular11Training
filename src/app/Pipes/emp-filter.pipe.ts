import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Entities/employee';
@Pipe({
  name: 'empfilter'
})
//filter is a method in js that can be used on arrays to filter the elements based on the criteria based as lambda expression.

export class EmpFilterPipe implements PipeTransform {
  transform(employees: Employee[], filterCriteria: string): Employee[] {
    if(filterCriteria == undefined) return employees;
    return employees.filter((emp) => emp.empName.toLowerCase().includes(filterCriteria.toLowerCase()));  
  }
}
//Pipes or filters provide a mechanism to format the data that U want to use in the user interface of the application. It is simply a class with a directive called Pipe which takes an object info about the name that U want to give to the pipe. name is the way to use the pipe in the application
//Pipe classes implement an interface called PipeTransform which gives one and only one function called transform. transform method provides the functionality on how UR data needs to be transformed while using it in the User interface. 
//Input for the pipe comes as first arg, 2nd arg will be any custom conditions or criteria and it can add on to any no of critierias, and finally returns a specific kind of data. In the example able, input will be an array of employees, criteria will be the filter based on name, returns a nested list of employees filtered based on the criteria. 
//Pipes are not just for filtering, its job is to transform the input to the specific output which U can appy in ur user interface. 
//U generate the pipe using the ng command:
//ng generate pipe Pipes/EmpFilter --skip-tests

