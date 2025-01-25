var course3 =
    [
        'javaScroip',
        'PHP',
        'ruby',
    ];

var htmlss = courses.map(function (course) {
    return `<h2>${course}</h2>`;
});

console.log(htmlss.join(''));
