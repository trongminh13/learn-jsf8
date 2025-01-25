//alert('Xin chao ba gia ngheo kho')
/// so so 
var fullName = 'do trong minh';
console.warn(fullName)
console.log(fullName)
console.error(fullName)

confirm('Xac nhan ban du tuoi!');
prompt('that ko');

setTimeout(function () {
    alert('thong bao')
}, 1000)
///
// setInterval(function()
// {
//     console.log('day la log' + Math.random())
// },1000
// )
///
var a = 8;
var b = 4;
var c = a * b;
var d = a / b;
var e = a - b;
var g = a + b;
var f = a ** b;
console.log(c);
console.log(d);
console.log(e);
console.log(g);
console.log(f);
console.log('fff');
a++;
console.log(a);
a--;
console.log(b);

///

var number = 6;
console.log("rrrr");
var output = ++number * 2 - number-- * 2;

var oup = number++;
var op = ++number;

console.log('output: ', output);
console.log('oup: ', oup);
console.log('op: ', op);

a -= 2;
console.log('a: =', a);

var name = 'Son';
name += '  Dang';
console.log(name);
///
var ab = 5;
var bc = 7;
var cd = 5;
var gg = 'dotrong minh';
var jj = 'dotrong Minh';

if (ab >= cd && gg == jj) {
    console.log('dung');
} else {
    console.log('sai');
}
// boo
var isSuccess = a > b;
console.log(isSuccess);


var isanslo = 1 > 2;

if (isanslo) {
    console.log('DIEU KIEN DUNG');
} else {
    console.log('DIEU KIEN SAI');
}
///
var a1 = 1;
var a2 = 2;
var a3 = 3;
console.log(typeof a1); // tim kieu du lieu bien
///
if (a1 > 0 && !(a2 < 0))
    console.log('DIEU KIEN DUNG 1');
else if (a3 > a2 || a1 < 0) {
    console.log('DIEU KIEN DUNG 2');
} else {
    console.log('ko co cai nao dung ca');
}

var fullname = "trong minh";
console.log(typeof fullName); // tim kieu du lieu bien
///
var isSuccess = true;
console.log(typeof isSuccess); // tim kieu du lieu bien

var age;
console.log(age);
console.log(typeof age); // tim kieu du lieu bien

var isNull = null;
console.log(isNull);
console.log(typeof isNull); // tim kieu du lieu bien
// can tim hieu them 
var id = Symbol('id');
var id2 = Symbol('id');
console.log(typeof id); // tim kieu du lieu bien
var myFunction = function ()// khi nao goi ten fun thì nó mới chạy code bên trong
{
    alert('Hi, xin chao cac ban');
}
console.log(typeof myFunction); // tim kieu du lieu bien

var myObject = {
    name: 'trong minh',
    age: 18,
    adress: 'Ha Noi',
    myFunction: function () {

    }
};
console.log('myObject', myObject);
console.log(typeof myObject); // tim kieu du lieu bien

var myArray = [
    'Javascript',
    'PHP',
    'Ruby'
];

console.log(myArray)

console.log(typeof myArray); // tim kieu du lieu bien
/// toan tu so sanh
var a2 = 1;
var b2 = '1';
var c2 = 1;
console.log(a2 === b2);
console.log(a2 == c2);
console.log(a2 !== b2);

///
var a3 = 1;
var a3 = 2;
var result = 'A' && NaN && 'D'; // tim tat ca den cuoi
var resutl = null || undefined || 0;
if (result) {
    console.log('DIEU KIEN DUNG');
    console.log(result);

} else {
    console.log('DIEU KIEN SAI');
    console.log(result);
}

if (resutl) {
    console.log('DIEU KIEN DUNG lan 1');
    console.log(resutl);

} else {
    console.log('DIEU KIEN SAI lan 1');
    console.log(resutl);
}