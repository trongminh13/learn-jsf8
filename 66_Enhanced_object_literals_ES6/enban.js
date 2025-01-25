var name ='Javascript';
var price = 1000;

var caurse =
{
    name,
    price,
    getName: function()
    {
        return name;
    }
};

console.log(caurse.getName());


var fieldNamee = 'name';
var fieldPrice = 'pricee';

const course1 = {
    name: 'Javascript',
    [fieldNamee]: 'Javascript',
    [fieldPrice]: 1000
};

console.log(course1);