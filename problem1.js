var sum = 0;
var sum2 = 0;
/* Takes the number of the function and finds all divisable numbers of 3
and 5. If the number goes evenly into the number the function calls,
then it will add them all together into the sum.
*/
var solution = function(number) {
    for (var i = 1; i < number; i++) {
        if (i % 3 === 0) {
            sum = i + sum;
        }
        else if (i % 5 === 0) {
            sum2 = i + sum2;
        }
    }
    console.log(sum);
    console.log(sum2);
};

solution(1000);