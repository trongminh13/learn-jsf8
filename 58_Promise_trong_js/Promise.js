var promise = new Promise(
    function(resolve,reject)
    {
        reject('Co loi');
    }
);

promise
.then(function(courses)
{
    console.log(courses);
})

.catch(function(error)
{
    console.log(error);
})

.finally(function(courses)
{
    console.log(courses);
});