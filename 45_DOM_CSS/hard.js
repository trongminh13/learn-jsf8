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