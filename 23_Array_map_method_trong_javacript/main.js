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
    
function courseHandler1(course) {
    console.log(course);
}
var newCourses = courses.map(courseHandler1);

function courseHandler2(course) {
    return course;
}
var newCourses = courses.map(courseHandler2);
console.log(newCourses);

function courseHandler3(course, index) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia : ${course.coin}`

    };
}
var newCourses = courses.map(courseHandler3);
console.log(newCourses);


function courseHandler(course) {
    return course.name;
}

var newCourses = courses.map(courseHandler);
console.log(newCourses);




function courseHandler(course, index) {
    return `<h2>${course.name}</h2>`;
}

var newCourses = courses.map(courseHandler);

console.log(newCourses);
console.log(newCourses.join(''));
