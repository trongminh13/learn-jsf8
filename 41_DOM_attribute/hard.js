var headingElementt =
document.querySelector('h1');

console.log(headingElementt);

console.log('domm');
var headingElement =
document.querySelector('a');

headingElement.href = 'Heading';
headingElement.title = "title test";
 headingElement.id = "Heading";

 headingElement.className = 'Heading-test';
 headingElement.setAttribute('data-1','heading');
 console.log(headingElement.getAttribute('class'));

headingElement.setAttribute('data','test data');
alert(headingElement.getAttribute('data'));
alert(headingElement.title);

var headingElement=
document.querySelector('h2');
console.log(headingElement.getAttribute('class'));
