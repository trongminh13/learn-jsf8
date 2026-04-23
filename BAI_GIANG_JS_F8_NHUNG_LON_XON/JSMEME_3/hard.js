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

///
console.log('teeee');
var headingElementg =
document.querySelector('.gaoo');
console.log(headingElementg.innerText); //geter
 console.log(headingElementg.textContent);
headingElementg.innerText = 'new'; // thay doi seter
headingElementg.textContent = 'new';// thay doi
// innerText geter noi dung lay duoc se giong noi dung tren trinh duyet
// textcontent getter tra ve noi dung that cua no nam trong doom

var headingElementk = document.querySelector('.headingkk');
console.log(headingElementk.innerText);
console.log(headingElementk.textContent);

///
console.log('baimoi');
// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<h1>Heeeegggg</h1>';

var boxElement = document.querySelector('.box');
boxElement.innerHTML='<h1 title ="hh">Newheading</h1>';
// console.log(document.querySelector('h1').innerText);
/// giong cai duoi


///
console.log(boxElement.innerHTML);

console.log('tets');
var boxElement = document.querySelector('.boxx');
console.log(boxElement.outerHTML);

boxElement.outerHTML = '<span>Testthu</span>';
console.log(boxElement.innerHTML);

 /// double
var boxElementl = document.querySelector('.box');
boxElementl.innerHTML ='<h4>Headingkj</h4>';
console.log(document.querySelector('h4').innerHTML);
console.log(boxElementl.innerHTML);
console.log('---');
console.log(boxElementl.outerHTML);
boxElementl.outerHTML = '<span>Testffffsdfsdfsd</span>';
console.log(boxElementl);
console.log('kk');
 console.log(boxElementl.innerHTML);
 
/// phan nay them nhé
 ///

 var boxElement0
 = document.querySelector('.boxg');

 boxElement0.style.width ="100px";
 boxElement0.style.height ="200px";
 boxElement0.style.backgroundColor ='red';

var boxElement2
= document.querySelector('.boxf');

Object.assign(boxElement2.style, 
    {
        width: '300px',
        height: '200px',
        backgroundColor: 'green',
    });

console.log(boxElement2.style.width);
///
console.log('rrrrrrrr');
var boxElement3 = document.querySelector('.boxi');

console.log(boxElement3.classList.value);
console.log(boxElement3.classList.length);
console.log(boxElement3.classList[1]);
boxElement3.classList.add('red','green');
console.log(boxElement3.classList.contains('red'));

setTimeout(() =>
{
    boxElement3.classList.remove('red');
},300000);

setTimeout(() =>
{
    boxElement3.classList.toggle('red'); // se xoa bo red trong element
},300000);

setInterval(() =>
{
    boxElement3.classList.toggle('red'); //nhap nhay
},1000);
///w3shool



