/**
 *
 * 
 * 
 * @desc 
 * We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives

 * 
 * 
 * 
 * 
 */



function add(a,b) {
    var ans = [];
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
    var carry = 0;
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      var sum = (a[i] == undefined ? Number(0) : Number(a[i])) + (b[i] == undefined ? Number(0) : Number(b[i])) + Number(carry);
      if(sum.toString().length > 1) {
        lastDigit = (sum % 10).toString();
        carry = parseInt(sum / 10);
        ans.push(lastDigit)
      } else {
        carry = 0;
        ans.push(sum.toString())
      }
      if(i+1 === Math.max(a.length, b.length)) {
        if(carry > 0)
          ans.push(carry.toString())
      }    
    }
    return ans.reverse().join("")
  }