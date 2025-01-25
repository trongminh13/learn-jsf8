function writeLog(mesage, mesage2, mesage3) {
    console.log(mesage)
    console.log(mesage2)
    console.log(mesage3)
}
writeLog('TEST', 'baitap');


function wg() {
    console.log(arguments);
}
wg('lop 1', 'lop 2');


function wri() {
    var myString3 = '';
    for (var param of arguments) {
        myString3 += `${param} - `
    }
    console.log(myString3);
}
wri('lop the a', 'lop the lam sao', 'the a');
///
function cong(ac, bc) {
    a + b;
    return '2' + '8';
    console.log('123');

}

var resul3 = cong(2, 8);
console.log(resul3);