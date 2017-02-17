/*
Given an array of integers, calculate which fraction of its elements are positive, 
which fraction of its elements are negative, and which fraction of its elements are zeroes, 
respectively. Print the decimal value of each fraction on a new line.

https://www.hackerrank.com/challenges/plus-minus?h_r=next-challenge&h_v=zen
*/

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    ///////////////////////
    var positive = 0
    var negative = 0
    var zeroes = 0
    for (var i in arr) {
    	if (arr[i] > 0) {
    		positive++
    	} else if (arr[i] == 0) {
    		zeroes++
    	} else if (arr[i] < 0) {
    		negative++
    	} else {
    		console.log('error:', arr[i])
    	}
    }

    if (positive == 0) {
    	console.log(0)
    } else {
    	console.log(positive/n)	
    }
    
    if (negative == 0) {
    	console.log(0)
    } else {
    	console.log(negative/n)	
    }
    
    if (zeroes == 0) {
    	console.log(0)
    } else {
    	console.log(zeroes/n)	
    }
    
}