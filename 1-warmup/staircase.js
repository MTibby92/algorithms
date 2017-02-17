/*
Consider a staircase of size n=4:

   #
  ##
 ###
####
Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.
*/

function main() {
    // var n = parseInt(readLine());
    var n = 6
    //////////////////////
    var step = n
    for (var i=0; i < n; i++) {
    	var str = ''
    	for (var j=0; j < n && step > 0; j++) {
    		if (j < step-1) {
    			str = str.concat(' ')
    			console.log('j =', j)
    		} else {
    			step--
    			for (var k=0; k < n-step; k++){
    				str = str.concat('#')
    			}
    			console.log(str)
    			console.log('step =', step)
    			// j=0
    			var str = ''
    		}
    	}		
    }
}

main()