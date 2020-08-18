//  const division= require('./src/arithmatic.js');
describe("divide", function() {
    it("should return the value of (a / b)", function() {
      expect(divide(3,3)).toEqual(1);
      expect(divide(6,2)).toEqual(3);
    });
  
    it("should throw an error if you try to divide by 0", function() {
      expect( divide(1,0)).toBe("error");
    });
    it('should throw an error if you enter string',function(){
        let a="hello";
        let b="world";
        let division=divide(a/2)||divide(2/b);
      expect(divide(a/b)).toBe('Invalid');
    });
});
    