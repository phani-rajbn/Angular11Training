import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './Components/calc/calc.component';
import { EmpManagerComponent } from './Components/emp-manager/emp-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    EmpManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//This will contain info about all the external modules, components, pipes, classes, directives and other units of the application that will be used in the module. It also contains info about the Dependency Injectors used in the module. It also defines the components that needs to be loaded when the module is loaded into the application. bootstrap attribute will tell the components that are loaded when the module is instantiated by the Angular Application. 


