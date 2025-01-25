var courses1 =
    [
        {
            id: 1,
            name: 'Javascript',
            coin: 100

        },
        {
            id: 2,
            name: 'HTLM,CSS',
            coin: 200
        },
        {
            id: 3,
            name: 'ReactJS',
            coin: 220
        },
        {
            id: 4,
            name: 'ReactJS',
            coin: 200
        },
        {
            id: 5,
            name: 'ReactJSfffff',
            coin: 480
        }
    ];
var totalCoin1 = courses1.reduce(function (total, course1) {
    return total + course1.coin;
}, 0); //initial value
console.log(totalCoin + 1);

var totalCoin2 = courses1.reduce(function (total, course1) {
    i++;
    console.log(i, total, course1);
    return total + course1.coin;
});


var number1 = [100, 200, 220, 200, 480];
var totalCoin3 = number1.reduce(function (total, number) {
    return total + number;
}, 0);
console.log(totalCoin);


// làm phẳng mảng 
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);


//lay ra cac khoa hoc dua vao 1 mang moi

var topics = [
    {
        topic: 'Front-end',
        courses2: [
            {
                id: 1,
                title: "HTML,CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: 'Back-end',
        courses2: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    },
];
var newCourses1 = topics.reduce(function (courses2, topic) {
    return courses2.concat(topic.courses2);
}, []);

console.log(newCourses1);

var htmls = newCourses1.map(function (course) {
    return `<div>
    <h2>${course.title}</h2>
    <p>ID: ${course.id}</p>
    </div>`;
    // <div>
    // <h2>${course.title}</h2>
    // <p>ID: ${course.id}</p>
    // </div>
    // ';
});
console.log(htmls);
console.log('----------');
console.log(htmls.join(''));
