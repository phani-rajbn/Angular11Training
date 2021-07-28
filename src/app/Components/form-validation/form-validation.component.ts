import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Entities/employee';
@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  empDetails : Employee;
  constructor() { }

  ngOnInit(): void {
    this.empDetails = new Employee(123, "Phaniraj", "Bangalore", 56000);
  }

  onClick = () => alert("Employee details are saved");

}
