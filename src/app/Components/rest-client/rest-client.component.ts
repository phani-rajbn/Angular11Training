import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../../Services/rest-service.service';
import { Employee } from '../../Entities/employee';
@Component({
  selector: 'app-rest-client',
  templateUrl: './rest-client.component.html',
  styleUrls: ['./rest-client.component.css']
})
export class RestClientComponent implements OnInit {
  public data : Employee [] =[];
  public newEmp : Employee = new Employee(0, "", "", 0);
  public selectedEmp : Employee;
  constructor(private myService : RestServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll =() => this.myService.responseFromRest
    .subscribe((arg) => this.data = <Employee[]>arg);

  onAddNew = (emp : Employee) => this.myService.addEmployee(emp).subscribe((response) => { alert(response) });
  
  onEdit = (id : number) =>{
      this.myService.getEmployee(id);
      this.myService.responseFromRest.subscribe((res)=>{
        this.selectedEmp = <Employee>res[0];
      });
  }

  onSave = ()=>{
    debugger;
    this.myService.updateRecord(this.selectedEmp)
      .subscribe((res) => alert("Employee updated successfully"));
  }
}
//The return of any service request will be an Observable Object. Observables are objects defined in RxJs library of Angular to allow async calls and its handling in the Angular Components. 
//subscribe is a method of the observable object that allows the function to wait till the result is recieved from the HTTP and on recieving, will perform the operation defined in the callback function. Usually callback function will be a lambda function. 