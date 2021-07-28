import { TestBed, async } from "@angular/core/testing";
import { CalcComponent } from "./calc.component";

describe("Unit Test on CalcComponent", ()=>{
    let component : CalcComponent

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[CalcComponent]
        }).compileComponents();
        const fixter = TestBed.createComponent(CalcComponent);
        component = fixter.componentInstance;
    });

    it("should build the component", ()=>{
        expect(component).toBeTruthy();
    })
})    

/*
Unit testing for angular components will be property testing. 
Unit testing for classes will be functionality testings. 
Services will have DI testings. 
Protractor U will do browser testings. 
*/