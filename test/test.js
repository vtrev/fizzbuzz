let assert = require('assert')
let Factory = require('../index');


let fizzBuzzInstance = Factory();



describe('FizzBuzz tests', function () {
    it('Should return the number given if not multiples of either 3 or 5', function () {

        assert.equal(fizzBuzzInstance.fb(1), 1);
        assert.equal(fizzBuzzInstance.fb(2), 2);
        assert.equal(fizzBuzzInstance.fb(4), 4);
        assert.equal(fizzBuzzInstance.fb(7), 7);
    });

    it('Should return Fizz for numbers that are multiples of 3', function () {

        assert.equal(fizzBuzzInstance.fb(3), "Fizz");
        assert.equal(fizzBuzzInstance.fb(12), "Fizz");
        assert.equal(fizzBuzzInstance.fb(18), "Fizz");
    });

    it('Should return Buzz for numbers that are multiples of 5', function () {

        assert.equal(fizzBuzzInstance.fb(5), "Buzz");
        assert.equal(fizzBuzzInstance.fb(20), "Buzz");
        assert.equal(fizzBuzzInstance.fb(100), "Buzz");
    });
    it('Should return Fizz-Buzz for numbers that are both multiples of 3 and 5', function () {

        assert.equal(fizzBuzzInstance.fb(75), "FizzBuzz");
        assert.equal(fizzBuzzInstance.fb(60), "FizzBuzz");
        assert.equal(fizzBuzzInstance.fb(45), "FizzBuzz");
    });

});