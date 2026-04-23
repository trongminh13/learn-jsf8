var btn = document.getElementById("btn");

setTimeout(function () {
  btn.onclick = function () {
    console.log("Viec 1");

    console.log("Viet 2");

    alert("Viec 3");
  };
}, 3000);

var btl = document.getElementById("btl");

    btl.onclick = function () {
      console.log("Viec 1");
  
      console.log("Viet 2");
  
      alert("Viec 3");
    }


setTimeout(function ()
{
    btl.onclick = function () 
    {
    }
},3000);

var btr = document.getElementById('btr');

btr.addEventListener('click', function(e)
{
    console.log('Event 1');
});

btr.addEventListener('click', function(e)
{
    console.log('Event 2');
});

btr.addEventListener('click', function(e)
{
    console.log('Event 3');
});


var btg = document.getElementById('btg');
function viec1()
{
    console.log('Viec 1');
}

function viec2()
{
    console.log('Viec 2');
}

btg.addEventListener('click', viec1);
btg.addEventListener('click', viec2);

setTimeout(function()
{
    btg.removeEventListener('click',viec1);
},3000);

