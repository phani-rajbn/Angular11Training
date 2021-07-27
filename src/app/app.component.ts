import { Component } from '@angular/core';
//We use typescript to create variables, functions  inside the Component. A Component is basically a class with a directive called Component. 
//Directive is a sp intruction to Angular and provide all nessasities to make it a component software. 
@Component({
  selector: 'app-root',//Used to define the element name for Ur component...
  templateUrl: './app.component.html',//represents the UI structure of the component
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    //data and functions to be used in the UI...
    title :string  = "Welcome to Angular training";
    author : string = "Developed by Phaniraj B.N.";
    salary : number = 65000;
    showMe : boolean = false;
    status : string = "Show Me";
    
    //When U refer the class members in the function, U must refer it using this operator. 
    onShowMe(){ //Syntax of creating function within the class in Typescript...
      debugger;
      this.showMe = !this.showMe;
      if(this.showMe == true)
        this.status = "Hide Me!";
      else
        this.status = "Show Me!";
    }
}

//U could use template or templateUrl for defining the UI structure of the Component. If U have a small UI structure, U could do inline html content using template. If U have a large UI structure, u can go for a separate HTML file and refer that file using templateUrl attribute. 
//data types of Typescript is based on JS data types. number, string, boolean, object, undefined. 