
//stringify : từ javascript types -> Json
// Parse: từ JSON -> Javacript types

var a = '1';
var json ='["Javascript","PHP"]';
var json1 = '{"name":"TrongMinh","age":18}';
console.log(JSON.parse(a));
console.log(JSON.parse(json));
console.log(JSON.parse(json1));
console.log(JSON.stringify(null));
console.log(JSON.stringify([
'Javascript',
'PHP'
]));
console.log(JSON.stringify({
    name:'Son Dang',
    age: 16,
    test:function() {}
}));
console.log(typeof JSON.stringify(null));