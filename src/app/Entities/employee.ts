//Class in Angular is used to create data entities for the application. They are programmatical way of creating user defined data types that can be used in the application. 

//Now in UR code, U could refer this class and create objects of it in UR components. 
export class Employee {
    empId : number;
    empName : string;
    empAddress : string;
    empSalary : number;

    constructor(id : number , name : string, address: string, salary: number) {
        this.empId = id;
        this.empName = name;
        this.empAddress = address;
        this.empSalary = salary;
    }
}

