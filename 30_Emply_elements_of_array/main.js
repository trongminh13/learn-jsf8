
Array.prototype.map2 = function(callback1) {
    var output = [];
    var arrayLength = this.length;

    for (var i = 0; i < arrayLength; ++i) {
        var result = callback1(this[i], i);
        output.push(result);
    }
    return output;
}

var coursesf =
    [
        'javaaaa',
        'ffdfd',
        'fdfdf'
    ];

var htmlst = coursesf.map2(function(coursesf) {
    return `<h3>${coursesf}</h3>`;
});
console.log(htmlst);



console.log('test');

var course6 =
    [
        'motcai',
        'haicai'
    ];
course6.length = 15;
console.log(course6);

console.log('test2');
for (var index in course6) {
    console.log(index);
}
console.log('test3');
for (var index in course6) {
    console.log(course6[index]);
}


var course5 = new Array(10, 12);

console.log(course5);
for (var index in course5) {
    console.log(course5[index]);
}


var course4 = new Array(10);
course4.push('Javasrop', 'PHP');
console.log(course4);
for (var index in course4) {
    console.log(course4[index]);
}
