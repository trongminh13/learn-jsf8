console.log(document);
document.write("hello guy"); 

var headingNode = document.getElementById('heading');
{
    console.log(headingNode);
    console.log('dom');
    console.log(
        {
            element: headingNode
        }
    );
}
console.log('dom2');
var headingNodes = document.getElementsByClassName('head');

console.log(headingNodes); 

console.log('dom3');
var headingNodes = document.getElementsByTagName('h3');
console.log(headingNodes); 

console.log('dom4');
var headingNodes = document.getElementsByTagName('p');
console.log(headingNodes); 

console.log('dom5');
var headingNodei = document.querySelector('.he');
console.log(headingNodei); 

console.log('dom6');
var headingNodeii = document.querySelector('.box .head:first-child');
console.log(headingNodeii); 

console.log('dom7');
var headingNodeij = document.querySelector('.box .head:nth-child(2)');
console.log(headingNodeij); 

console.log('dom7.1');
var headingNodeijj = document.querySelectorAll('.box .head');
console.log(headingNodeijj); 
console.log('contiepdom7.1');
console.log(headingNodeijj[2]); 

console.log('dom8');
console.log(document.anchors);

console.log('dom9');
console.log(document.forms);
console.log(document.forms['form-1']);
console.log(document.forms.testform);
///
console.log('dom10');
var listItemNodes = document.querySelectorAll('.box-1 li');
console.log(listItemNodes);

console.log('dom11');
var boxNode = 
document.querySelector('.box-1');

console.log(boxNode);

console.log(boxNode.getElementsByTagName('li'));
console.log(boxNode.querySelector('p'));
///

console.log('phan moi chua lam');
///

console.log('phan moi chua lam');
///

var headingElement =
document.querySelector('h1');
var headingElementt =
document.querySelector('a');

headingElement.href = 'heading';