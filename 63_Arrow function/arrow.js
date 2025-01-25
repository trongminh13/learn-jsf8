const logger = (log) =>
{
    console.log(log);
}

logger('Message...');

const sum = (a,b) => ({a:a,b:b});


console.log(sum(2,2));



const loggerR = log => console.log(log);


logger('Message...hehe');


const coursee = {
    name: 'Javascript basic!',
    getName: () =>
    {
        return this;
    }
};

console.log(coursee.getName());


const Course =function (name,price) {
this.name = name;
this.price = price;
}

const jsConuse = new Course('Javascript',100);

console.log(jsConuse);