import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../Entities/employee';
@Component({
  selector: 'emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
@Input() selectedEmp : Employee;
  constructor() {
    this.selectedEmp = new Employee(0, "test", "testAddress", 0)
  }

  ngOnInit(): void {
    
  }
}
/*
When U want ur selector to be provided with additional attributes along with its tag, U can provide @Input directive to ur component to allow users of the component to pass additional attributes to it as input to the object. 
*/