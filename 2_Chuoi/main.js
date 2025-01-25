var fullName1 = new String('TRONG MINH');
fullName2 = 'TRONG MINH LA \'CON KHI\'';
fullName3 = 'TRONG MINH LA \"CON CHO\"';
fullName4 = 'TRONG MINH LA \\';
console.log(typeof fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName3.length);
console.log(fullName4);


var fullten = " Mot so case su dung backslash"
    + "1.Mot so case su dung backslash"
    + "2.Mot so case su dung backslash"
    + "3.Mot so case su dung backslash"
    ;
console.log(fullten);
console.log(fullten.length);

var firstName = 'Do';
var lastName = 'Trong';
console.log('Toi la:' + firstName + ' ' + lastName + ' ');

var myString = 'Hoc JS tai JS JS F8!';

console.log(myString.length);
console.log(myString.indexOf('JS'));
console.log(myString.indexOf('ABCD'));
console.log(myString.indexOf('JS', 6));
console.log(myString.lastIndexOf('JS'));
console.log(myString.lastIndexOf('JS'));
console.log(myString.lastIndexOf('ABC'));
console.log(myString.search('JS'));
console.log(myString.slice(0, 3));
console.log(myString.slice(-3, -1));
console.log(myString.replace('JS', 'Javascript'));
console.log(myString.replace(/JS/g, 'Javascript'));
console.log(myString.toUpperCase());
console.log(myString.toLocaleLowerCase());
console.log(myString.trim().length);
var languages = 'Javascript, PHP , Ruby';
var languages1 = 'Javascript';
console.log('part1');
console.log(languages.split(', '));
console.log(languages1.split(''));
console.log(myString.charAt(10));
console.log(myString.charAt(23));
console.log(myString[11]);

