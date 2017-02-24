/*
John Watson performs an operation called a right circular rotation on an array of integers, . After performing one right circular rotation operation, the array is transformed from  to .

Watson performs this operation  times. To test Sherlock's ability to identify the current element at a particular position in the rotated array, Watson asks  queries, where each query consists of a single integer, , for which you must print the element at index  in the rotated array (i.e., the value of ).

Input Format

The first line contains  space-separated integers, , , and , respectively. 
The second line contains  space-separated integers, where each integer  describes array element  (where ). 
Each of the  subsequent lines contains a single integer denoting .
*/

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]); // length of the array
    var k = parseInt(n_temp[1]); // number of rotations performed
    var q = parseInt(n_temp[2]); // number of queries
    a = readLine().split(' ');
    a = a.map(Number); // array to operate on

    //////Rotate Array k times//////////
    for (var i=0; i < k; i++) {
    	var popped = a.pop()
    	a.unshift(popped)
    }
    ////////////////

    for(var a0 = 0; a0 < q; a0++){
        var m = parseInt(readLine()); // index being queried against
        //////////Find value at m /////////////
        console.log(a[m])
    }
    
}

main()