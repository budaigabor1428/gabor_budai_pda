var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add two numbers together', function () {
    const expected = 5;
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal, expected)
  });
  it('should subtract two numbers', function () {
    const expected = 3;
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, expected)
  });
  it('should multiply two numbers', function () {
    const expected = 15;
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, expected)
  });
  it('should divide two numbers', function () {
    const expected = 3;
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, expected)
  });

  it('should change the runningTotal by the number and change the newTotal to false', function(){
    calculator.numberClick(2);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 25);
    assert.equal(calculator.newTotal, false);
  })

  it('should change the previousOperator and the previousTotal to null', function(){
    calculator.clearClick();
    assert.equal(calculator.previousOperator, null);
    assert.equal(calculator.previousTotal, null);
  })

});
