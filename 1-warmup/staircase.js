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
    var n = parseInt(readLine());
    //////////////////////
    for (var i=0; i < n; i++) { // creates a row
        var str = ''
        for (var j=0; j < n; j++) { // defines contents of a row
            if (j < n-(i+1)) {
                str = str.concat(' ')
            } else {
                str = str.concat('#')
            }
        }
        console.log(str)    
    }
}

main()