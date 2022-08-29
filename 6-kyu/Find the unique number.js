/**
 *
 * @desc
 * 
 
    There is an array with some numbers. All numbers are equal except for one. Try to find it!

    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
    It’s guaranteed that array contains at least 3 numbers.

    The tests contain some very huge arrays, so think about performance.

    This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string
    Find The Unique
 
 * 
 * 
 */


function findUniq(arr) {
    arr = arr.sort((a, b) => { return b - a });
    console.log(arr)
    if (arr.length === 1) {
        return arr[0];
    } else {
        var uniqueValue = arr[0];
        var firstValue = arr[0];
        var secondValue = arr[1];
        if (firstValue == secondValue) {
            uniqueValue = -1;
        }
        for (let index = 1; index < arr.length; index++) {
            const element = arr[index];
            if (uniqueValue !== element && secondValue !== element) {
                uniqueValue = element;
            }
        }
    }
    console.log(uniqueValue)
    return uniqueValue;
}    