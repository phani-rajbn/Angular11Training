import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router, Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CalcComponent } from './Components/calc/calc.component';
import { EmpManagerComponent } from './Components/emp-manager/emp-manager.component';
import { EmpFilterPipe } from './Pipes/emp-filter.pipe';
import { EmpDetailComponent } from './Components/emp-detail/emp-detail.component';
import { NewEmpComponent } from './Components/new-emp/new-emp.component';
import { RestClientComponent } from './Components/rest-client/rest-client.component';
import { FormValidationComponent } from './Components/form-validation/form-validation.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { LazyLoadingComponent } from './Components/lazy-loading/lazy-loading.component';

const routes: Routes =[
  {path: 'Home', component : AppComponent},
  {path: 'Calc', component : CalcComponent},
  {path: 'Mgr', component : EmpManagerComponent},
  {path: 'Rest', component : RestClientComponent},
  {path: 'Forms', component : FormValidationComponent},
  {path: 'Reactive', component : ReactiveFormComponent},
  {path : 'LazyLoading', loadChildren: () => import('./Components/lazy-loading/lazy-loading.component').then(m => m.LazyLoadingComponent)},
  {path: '**', pathMatch:'full', redirectTo: 'Home'},
];  


@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    EmpManagerComponent,
    EmpFilterPipe,
    EmpDetailComponent,
    NewEmpComponent,
    RestClientComponent,
    FormValidationComponent,
    ReactiveFormComponent,
    LazyLoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//This will contain info about all the external modules, components, pipes, classes, directives and other units of the application that will be used in the module. It also contains info about the Dependency Injectors used in the module. It also defines the components that needs to be loaded when the module is loaded into the application. bootstrap attribute will tell the components that are loaded when the module is instantiated by the Angular Application. 


