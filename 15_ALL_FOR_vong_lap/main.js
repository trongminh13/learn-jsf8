for (var i = 1; i <= 10; i++) {
    console.log(i);
}
///
var myArray1 =
    [
        'javasc',
        'PHP',
        'Java',
        'Dart',
    ];
var arrayLength = myArray1.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myArray1[i]);
}
///

var myInfo1 =
{
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi,VN'
};
for (var key in myInfo1) {
    console.log(key);
    console.log(myInfo1[key]);
}
///
var languages5 =
    [
        'javascript',
        'php',
        'Ruby'
    ];

for (var key in languages5) {
    console.log(key);
    console.log(languages5[key]);
}

var myString4 = 'Javascript';
var languages5 = 'Javascript';

for (var key in languages5) {
    console.log(key);
    console.log(languages5[key]);
}

var myInfo2 =
{
    name: 'Son Dang',
    age: 18
};

for (var value of Object.keys(myInfo2)) {
    console.log(value);
}
console.log(Object.keys(myInfo2));
console.log(Object.values(myInfo2));
for (var value of Object.values(myInfo2)) {
    console.log(value);
}