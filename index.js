module.exports = function Factory() {
    let fizzBuzz = function (i) {
        let fizz = (i % 3) === 0;
        let buzz = (i % 5) === 0;

        if (fizz && !buzz) {
            return 'Fizz'
        } else if (buzz && !fizz) {
            return 'Buzz'
        } else if (fizz && buzz) {
            return 'FizzBuzz'
        } else {
            return i
        }
    }
    return {
        fb: fizzBuzz
    }
}