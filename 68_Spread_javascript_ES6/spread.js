function logger({name, price, ...rest})
{
    console.log(name);
    console.log(price);
    console.log(rest);
}

logger([2,6,12,3,4,4]);

var array0 = [];
var array1 = ['Javascript', 'Ruby','PHP'];

var array2 = ['ReactJS', 'Dartr'];

var array3 = ['ReactJS','Dart',...array2];
var array4 = ['ReactJS','Dart','Java', 'byru','PHP'];

var array5 = [...array1,...array2];
console.log(array3);
console.log(array4);
console.log(array5);

//////////////////////

var object1 =
{
    name: 'Javascript'
};

var object2 = {
    price: 1000
};

var object3 = 
{
    ...object1,
    ...object2
};

console.log(object3);

var defaultConfig = {
    api: 'http://domain-trang-khoa-hoc',
    apiVersion: 'v1',
}

var exerciseConfig = 
{
    ...defaultConfig,
    api: 'https://domain-trang-bao-tap'
};

console.log(exerciseConfig);


////////////////////////////

var array = ['Javascript','PHP','Ruby','React'];

function logger(a,b,c)
{
    console.log(a,b,c);
}
logger(...array);


console.log('------------------------');
function logger(...rest)
{
    for(var i = 0; i< rest.length;i++)
    {
        console.log(rest[i]);
    }
}
logger(...array);
