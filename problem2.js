var x = 1;
var y = 2;
var sum = 0;

/*The function will take the number will add the previous 2 numbers
together to generate the next one and so on and so fourth until it
reaches 4,000,000.

First it takes x and checkes if it's less than the number, if it is it 
will add itself and y together and restore the value in x. Then it will
check the same thing with y, if it's less than it will add itself, and x
and store the value inside y. It then takes the even numbers from both
x and y and stores them in sum.
*/

var solution = function(number) {
    while (x <= number) {
        x = x + y;
        if (y <= number) {
            y = x + y;
            if (x % 2 === 0) {
                sum = x + sum;
                }
                else if (y % 2 === 0) {
                    sum = y + sum;
            }
        }
    }
    console.log(sum);
};
solution(4000000);