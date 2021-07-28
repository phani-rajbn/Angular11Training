import { Calc } from './calc';

describe('Calc', () => {
  let obj : Calc; 
  beforeEach(()=>{
    obj = new Calc();
  });
  
  xit('should create an instance', () => {
    expect(new Calc()).toBeTruthy();
  });

  it("Should add 2 numbers", () =>{
      let v1 = 12;
      let v2 = 13;
      let expected = 25;
      expect(obj.addFunc(v1, v2)).toEqual(expected);  
  });

  it("Should subtract 2 numbers", ()=>{
      let v1 = 13;
      let v2 = 12;
      let expected = 1;
      expect(obj.subFunc(v1, v2)).toBe(expected);
  });
});
