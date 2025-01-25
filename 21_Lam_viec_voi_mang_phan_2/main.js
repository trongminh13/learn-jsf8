var courses =
    [
        {
            id: 1,
            name: 'Javascript',
            coin: 0

        },
        {
            id: 2,
            name: 'HTLM,CSS',
            coin: 0
        },
        {
            id: 3,
            name: 'ReactJS',
            coin: 0
        },
        {
            id: 4,
            name: 'ReactJS',
            coin: 500
        }
    ];

courses.forEach(function (course, index) {
    console.log(index, course);
});
var isFree = courses.every(function (course, index) {
    console.log(index);
    return course.coin === 0;
});
console.log(isFree);

var isFreeSome = courses.some(function (course, index) {
    console.log(index);
    return course.coin === 0;
});
console.log(isFreeSome);

var course = courses.find(function (course, index) {
    return course.name === 'ReactJS';
});
console.log(course);

var listcourse = courses.filter(function (course, index) {
    return course.name === 'ReactJS';
});
console.log(listcourse);