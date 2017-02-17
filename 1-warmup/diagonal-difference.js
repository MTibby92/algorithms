function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    //////////////////////////////
    var diag1 = 0
    var diag2 = 0
    var j = n-1
    for (var i=0; i < n; i++) {
    	diag1 += a[i][i]
    	diag2 += a[i][j]
    	j--
    }

    console.log(Math.abs(diag1-diag2))
}