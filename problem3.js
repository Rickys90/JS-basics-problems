/* Pushing all prime numbers into the array numbers to keep them organized */

var numbers = [];

/* This is the function to check if the number is prime. It will take
the number and divide it by i, which increases every time i is less then
the number. If i can go into the number before it reaches the number, it
will return false. Otherwise it will return true and the number will be prime.
*/

var primeNum = function(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

/* The test variable is what number we will try to factor. */

var test = 13195;

/* This will check all numbers from 2-test and check them to see if they
can be divided evenly into test. If test can be divided by x equally then
it's a possible prime and it will run the primeNum function, if both return
true it will push the number to the array.
*/

for (var x = 2; x < test; x++) {
    if (test % x === 0 && primeNum(x)) {
        numbers.push(x);
    }
}

console.log(numbers);

/* potential problems with this, if you test a number like a 1,000 it will
push 2, 5 into the array. It won't push the same number mulitple times into the array
if the number your factoring has them. */