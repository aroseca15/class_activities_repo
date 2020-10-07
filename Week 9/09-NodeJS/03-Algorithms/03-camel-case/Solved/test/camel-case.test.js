let expect = chai.expect;

describe("camelCase", function() {
  it("should return 'helloWorld' when given 'Hello World'", function() {
    let str = "Hello World";

    let result = camelCase(str);

    expect(result).to.eql("helloWorld");
  });

  it("should return 'theRainInSpainFallsMainlyOnThePlain' when given 'The rain in spain falls mainly on the plain'", function() {
    let str = "The rain in spain falls mainly on the plain";

    let result = camelCase(str);

    expect(result).to.eql("theRainInSpainFallsMainlyOnThePlain");
  });
});
