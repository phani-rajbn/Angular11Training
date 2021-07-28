import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  empForm : FormGroup//The Form U Created is represented as empForm as an instance of FormGroup....
  constructor() { }

  ngOnInit(): void {
    this.empForm = new FormGroup({
      empName : new FormControl('Phaniraj', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      eAddress : new FormControl('Bangalore 123', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
      eSalary : new FormControl('Phaniraj', [Validators.required, Validators.min(15000)]),
    })
  }

  onClick(){
    alert("Employee registered successfully");
  }
}
