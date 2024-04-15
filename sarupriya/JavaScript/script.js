function multiplyMatrices(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function addMatrices(m1,m2){
    var result = [];
    for(var i = 0; i < m1.length; i++){
        result[i] = [];
        for(var j = 0; j < m1[i].length; j++){
            result[i][j] = m1[i][j] + m2[i][j];
        }
    }
    return result;
}

var m1 = [[1,2],[3,4]];
var m2 = [[5,6],[7,8]];

var mResult = multiplyMatrices(m1, m2);

var mresult = addMatrices(m1, m2);

console.log(mresult);
console.log(mResult);