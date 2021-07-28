import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../Entities/employee';
//HttpHeaders will provide additional info like authentication and access support. 
//HttpClient gives the access to the REST SERVICES
@Injectable({
  providedIn: 'root'
})

export class RestServiceService {
  private url : string = 'http://localhost:3000/employees';
  responseFromRest : any;
  constructor(private hc : HttpClient) { //The constructor will create an object of the HttpClient as hc and can be used as a member of the class across the functions in it. 
     this.getAllEmployees();
  }

  getAllEmployees = () => this.responseFromRest = this.hc.get(this.url);

  addEmployee = (emp) : any => {
    let headers = new HttpHeaders({'Content-Type' : "application/json"});
    let details = this.hc.post(this.url, emp, { "headers" : headers });
    return details;
  }

  getEmployee = (id : number) : any =>{
      let tempUrl = this.url + '?empId=' + id;
      this.responseFromRest = this.hc.get(tempUrl);
  }

  updateRecord = (emp : Employee) : any =>{
    let headers = new HttpHeaders({"Content-Type" : "application/json"});
    return this.hc.put(this.url, emp, {"headers" : headers});
  }
}

//Service in Angular is an injectable object that can be created as a singleton reference and with which U can use the service as a single reference across the various components of the Module. How many ever times U create the service object, U get a same reference of it all the time. So this makes Ur service accessible across the components and give the same object to it. 
//Service in Angular is a class that has directive called @Injectable in it. Injectable classes are injected using the high profile Dependency injection provided by Angular. DI is one of the major features  of Angular since its insception. Injectable will have an attribute called providedIn with a value as root implies that this object is created at the start of the Angular Application.   This feature is available since Angular 7 onwards.
//Angular uses HTTPCLIENT and HTTP to interact with the REST Services, it is available as seperate module which has to be added into the App.Module.ts file. 

