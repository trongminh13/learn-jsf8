var h3Element =
document.querySelector('h3');


h3Element.onclick = function()
{
    console.log(Math.random());
}

h3Element.onclick = function(e)
{
    console.log(e);
}
h3Element.onclick = function(e)
{
    console.log(e.target);
}

var h3Elements
= document.querySelectorAll('h3');

for(var i = 0; i< h3Elements.length;++i)
{
    h3Elements[i].onclick = function(e)
    {
        console.log(e.target);
    }
}