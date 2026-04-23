var inputElement = document.querySelector('input[type="text"]');

inputElement.onchange = function(e)
{
    console.log(e.target.value);
}

var inputValue;

var inputElement1 = 
document.querySelector('input[type="text"]');

inputElement1.oninput = function(e)
{
    inputValue = e.target.value;
}

var inputElement2 =
document.querySelector('input[type="checkbox"]');

inputElement2.onchange = function(e)
{
    console.log(e.target.checked);
    console.log(e.target);
}

var inputElement3 =
document.querySelector('select');

inputElement3.onchange = function(e)
{
    console.log(e.target.value);
}



