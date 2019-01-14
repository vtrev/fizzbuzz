module.exports = function Factory() {
    let fizzBuzz = function (i) {
        let fizz = (i % 3) === 0;
        let buzz = (i % 5) === 0;

        if (fizz){
            return 'Fizz'
        }; 
        if (buzz) {
            return 'Buzz'
        }; 
        
        if (fizz && buzz) {
            return 'FizzBuzz'
        } else {
            return i
        }
    }
    return {
        fb: fizzBuzz
    }
}
