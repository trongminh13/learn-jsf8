Array.prototype.filter2 = function(callback)
{
    var output = [];
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            var result = callback(this[index],index,this); 
            if(result)
            {
                output.push(this[index]);
            }
        }
    }
    return output;
}
var course8 =[
{
    name:'jg',
    coin: 680
},
{
    name: 'php',
    coin: 860
},
{
    name:'Ruby',
    coin: 980
}
];

var filterCourses = course8.filter(function(course8,index,array) // tra ve thu >700 
{
    return course8.coin > 700;
});

console.log(filterCourses);
console.log('cotttttt');
var filterCourses = course8.filter2(function(course8,index,array) // tra ve thu >700 
{
    return course8.coin > 700;
});

console.log(filterCourses);
//
console.log('cot');

Array.prototype.filter3 = function(callback)
{
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            callback(this[index],index,this);
        }
    }
}

var course9 =[
    {
        name:'jg111',
        coin: 680
    },
    {
        name: 'php11',
        coin: 860
    },
    {
        name:'Ruby11',
        coin: 980
    }
];

console.log('kjh');
var filterCourses1 = course9.filter3(function(course9,index,array) // tra ve thu >700 
{
   console.log(course9,index,array);
});

console.log(filterCourses1);