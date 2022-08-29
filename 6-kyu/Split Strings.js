

/**
 * @desc
 * 
 * Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

    Examples:

        'abc' =>  ['ab', 'c_']
        'abcdef' => ['ab', 'cd', 'ef'] 
 * 
 */


function solution(str){
    if(str.length === 0) {
      return []
    } else {
      var data = str.match(/(.{1,2})/g)
      if(data[data.length - 1].length === 2) 
        return data 
      else {
        let last = data[data.length - 1].concat("_") 
        let x = data.slice(0,-1)
        x.push(last)
        return x; 
      }
    }
    
 }