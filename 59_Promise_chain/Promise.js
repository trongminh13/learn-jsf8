var promise = new Promise(
    function (resolve, reject) {
        resolve();
    }
);

// promise
// .then(function()
// {
//     console.log(1);
// })

// .then(function()
// {
//     console.log(2);
// })

// .then(function()
// {
//     console.log(3);
// })

// .catch(function(error)
// {
//     console.log(error);
// })

// .finally(function()
// {
//     console.log('Done!');
// });



// console.log("dfsfadfasdfdfsadfadfasdf");
// promise
// .then(function()
// {
//    return 1;
// })

// .then(function(data)
// {
//     console.log(data);
//     return 2;
// })

// .then(function(data)
// {
//     console.log(data);
//     return 3;
// })

// .then(function(data)
// {
//     console.log(data);
// })

// .catch(function(error)
// {
//     console.log(error);
// })

// .finally(function()
// {
//     console.log('Done!');
// });

///////////////////////////////////////
// promise
//     .then(function () {
//         //    return [1,2,3]
//         return new Promise(function (resolve) {
//             setTimeout(function(){
//                 resolve([1,2,3]);
//             },3000);
//         });
//     })

//     .then(function (data) {
//         console.log(data);
//     })

//     .catch(function (error) {
//         console.log(error);
//     })

//     .finally(function () {
//         console.log('Done!');
//     });


    function sleep(ms)
    {
        return new Promise(function(resolve){
            setTimeout(resolve,ms);
        });
    }

    sleep(1000)
        .then(function(){
            console.log(1);
            return sleep(1000);
        })
        .then(function(){
            console.log(2);
            return sleep(1000);
        })
        .then(function(){
            console.log(3);
            return sleep(1000);
        })
        .then(function(){
            console.log(4);
            return sleep(1000);
        })
    