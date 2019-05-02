var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it("should have the working operator buttons", function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#number1')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('20')
    })

    it("should be able to connect multiple operations", function (){
      running_total = element(by.css('#running_total'))
      element(by.css('#number5')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number1')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number5')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number8')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('22')
    })

    it("should be able to show negative numbers", function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('-8')
    })

    it("should be able to show decimal numbers", function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number3')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.be.within(0.333, 0.334)
    })

    it("should be able to show large numbers", function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('9.99999997e+26')
    })

    it("should not show a number if a number is divided with 0", function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number9')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('NaN')
    })

});
