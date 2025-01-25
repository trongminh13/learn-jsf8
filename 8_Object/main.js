Array.prototype.testMethod1 = 1;
Array.prototype.testMethod2 = function () {

};


Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        console.log('index: ', index);
    }
}
var course7 =
    [
        'javaScroip',
        'PHP',
        'ruby',
    ];
console.log('test3');

course7.length = 1000;
console.log(course7);
course7.forEach(function(course7,index,array)
{
    console.log(course7,index,array);
});
console.log('test4');
console.log(course7);
console.log('test5');
console.log(Array.prototype);
console.log('test6');
course7.forEach2(function (course7, index, array) {
    console.log(course7, index, array);
});
console.log('test0.1');
Array.prototype.forEach3 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index],index,this);
            console.log(index);
        }
    }

}
var course7 = new Array(100);
course7.push('Java','Ruby');

course7.forEach3(function(course7, index, array) {
    console.log(course7, index, array);
});

