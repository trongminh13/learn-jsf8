console.log('fffeesrgrgrg');
Array.prototype.some3 = function(callback)
{
    var output = false;

    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            if (callback(this[index],index,this))
            {
                output =true;
                break;
            };
        }
        
    }
    return output;
    
}

var course10 =
[
    {
        name: 'Javascrip',
        coin: 680,
        isFinish: false,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    }

];

var result3 = course10.some3(function(course10,index,array)
{
    return course10.isFinish;
});
console.log(result3);
