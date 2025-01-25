

// function sleep(ms)
// {
//     return new Promise(function(resolve){
//         setTimeout(resolve,ms);
//     });
// }

// sleep(1000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(2);
//         return new Promise(function(resolve,reject){
//             reject('co loi');
//         });
//     })
//     .then(function(){
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(4);
//         return sleep(1000);
//     })
//     .catch(function(error){
//         console.log(error);
//     });




var promise = Promise.resolve('Success');
var promise1 = Promise.resolve('Error!');
promise
    .then(function (result) {
        console.log('result: ', result);
    })

    .catch(function (err) {
        console.log('err:', err);
    });

promise1
    .then(function (result) {
        console.log('result: ', result);
    })

    .catch(function (err) {
        console.log('err:', err);
    });




/////////////////////////////////////////////////

var promise2 = new Promise(
    function (resolve) {
        setTimeout(function () {
            resolve([1]);
        }, 1000);
    }
);

var promise3 = new Promise(
    function (resolve) {
        setTimeout(function () {
            resolve([2, 3]);
        }, 2000);
    });

Promise.all([promise2, promise3])
    .then(function (result) {
        console.log(result);
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    });


Promise.all([promise2, promise3])
    .then(function (result1,result2) {
        
        console.log(result1.concat(result2));
    });

////////////////////////////////////

    var promise2 = Promise.reject('Co loi! ne');
    
    var promise3 = new Promise(
        function (resolve) {
            setTimeout(function () {
                resolve([2, 3]);
            }, 2000);
        });

        Promise.all([promise2, promise3])
        .then(function (result1,result2) {
            console.log(result1.concat(result2));
        })
        .catch(function(error)
        {
            console.log(error);
        });