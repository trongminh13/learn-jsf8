//alert('Xin chao ba gia ngheo kho')
/// so so 
var fullName = 'do trong minh';
console.warn(fullName)
console.log(fullName)
console.error(fullName)

confirm('Xac nhan ban du tuoi!');
prompt('that ko');

setTimeout(function () {
    alert('thong bao')
}, 1000)
///
// setInterval(function()
// {
//     console.log('day la log' + Math.random())
// },1000
// )
///
var a = 8;
var b = 4;
var c = a * b;
var d = a / b;
var e = a - b;
var g = a + b;
var f = a ** b;
console.log(c);
console.log(d);
console.log(e);
console.log(g);
console.log(f);
a++;
console.log(a);
a--;
console.log(b);

///

var number = 6;

var output = ++number * 2 - number-- * 2;

var oup = number++;
var op = ++number;

console.log('output: ', output);
console.log('oup: ', oup);
console.log('op: ', op);

a -= 2;
console.log('a: =', a);

var name = 'Son';
name += '  Dang';
console.log(name);
///
var ab = 5;
var bc = 7;
var cd = 5;
var gg = 'dotrong minh';
var jj = 'dotrong Minh';

if (ab >= cd && gg == jj) {
    console.log('dung');
} else {
    console.log('sai');
}
// boo
var isSuccess = a > b;
console.log(isSuccess);


var isanslo = 1 > 2;

if (isanslo) {
    console.log('DIEU KIEN DUNG');
} else {
    console.log('DIEU KIEN SAI');
}
///
var a1 = 1;
var a2 = 2;
var a3 = 3;
console.log(typeof a1); // tim kieu du lieu bien
///
if (a1 > 0 && !(a2 < 0))
    console.log('DIEU KIEN DUNG 1');
else if (a3 > a2 || a1 < 0) {
    console.log('DIEU KIEN DUNG 2');
} else {
    console.log('ko co cai nao dung ca');
}

var fullname = "trong minh";
console.log(typeof fullName); // tim kieu du lieu bien
///
var isSuccess = true;
console.log(typeof isSuccess); // tim kieu du lieu bien

var age;
console.log(age);
console.log(typeof age); // tim kieu du lieu bien

var isNull = null;
console.log(isNull);
console.log(typeof isNull); // tim kieu du lieu bien
// can tim hieu them 
var id = Symbol('id');
var id2 = Symbol('id');
console.log(typeof id); // tim kieu du lieu bien
var myFunction = function ()// khi nao goi ten fun thì nó mới chạy code bên trong
{
    alert('Hi, xin chao cac ban');
}
console.log(typeof myFunction); // tim kieu du lieu bien

var myObject = {
    name: 'trong minh',
    age: 18,
    adress: 'Ha Noi',
    myFunction: function () {

    }
};
console.log('myObject', myObject);
console.log(typeof myObject); // tim kieu du lieu bien

var myArray = [
    'Javascript',
    'PHP',
    'Ruby'
];

console.log(myArray)

console.log(typeof myArray); // tim kieu du lieu bien
/// toan tu so sanh
var a2 = 1;
var b2 = '1';
var c2 = 1;
console.log(a2 === b2);
console.log(a2 == c2);
console.log(a2 !== b2);

///
var a3 = 1;
var a3 = 2;
var result = 'A' && NaN && 'D'; // tim tat ca den cuoi
var resutl = null || undefined || 0;
if (result) {
    console.log('DIEU KIEN DUNG');
    console.log(result);

} else {
    console.log('DIEU KIEN SAI');
    console.log(result);
}

if (resutl) {
    console.log('DIEU KIEN DUNG lan 1');
    console.log(resutl);

} else {
    console.log('DIEU KIEN SAI lan 1');
    console.log(resutl);
}
///
var fullName1 = new String('TRONG MINH');
fullName2 = 'TRONG MINH LA \'CON KHI\'';
fullName3 = 'TRONG MINH LA \"CON CHO\"';
fullName4 = 'TRONG MINH LA \\';
console.log(typeof fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName3.length);
console.log(fullName4);


var fullten = " Mot so case su dung backslash"
    + "1.Mot so case su dung backslash"
    + "2.Mot so case su dung backslash"
    + "3.Mot so case su dung backslash"
    ;
console.log(fullten);
console.log(fullten.length);

var firstName = 'Do';
var lastName = 'Trong';
console.log('Toi la:' + firstName + ' ' + lastName + ' ');

///
var myString = 'Hoc JS tai JS JS F8!';

console.log(myString.length);
console.log(myString.indexOf('JS'));
console.log(myString.indexOf('ABCD'));
console.log(myString.indexOf('JS', 6));
console.log(myString.lastIndexOf('JS'));
console.log(myString.lastIndexOf('JS'));
console.log(myString.lastIndexOf('ABC'));
console.log(myString.search('JS'));
console.log(myString.slice(0, 3));
console.log(myString.slice(-3, -1));
console.log(myString.replace('JS', 'Javascript'));
console.log(myString.replace(/JS/g, 'Javascript'));
console.log(myString.toUpperCase());
console.log(myString.toLocaleLowerCase());
console.log(myString.trim().length);
var languages = 'Javascript, PHP , Ruby';
var languages1 = 'Javascript';
console.log(languages.split(', '));
console.log(languages1.split(''));
console.log(myString.charAt(10));
console.log(myString.charAt(23));
console.log(myString[11]);

///
var age = 18;
PI = 3.14;

var PIX = 3000.23421;
var result = 20 / 1;
var result2 = 20 / 'ABC';

console.log(isNaN(result));
console.log(isNaN(result2)); // kiem tra phep chia ko hoi le

var myString2 = PI.toString();
console.log(age.toString());
console.log(typeof myString2);


console.log(PI.toFixed());
console.log(PIX.toFixed(3));


///
var languages2 =
    [
        'Javascript',
        'PHP',
        'Ruby',
        null,
        undefined,
        function () {

        },
        {},
        123
    ];
console.log(languages2);
console.log(Array.isArray(languages2));
console.log(Array.isArray({}));
console.log(languages2[3]);
/// lam viec moi mang
var languages3 = [
    'dau tien',
    'thu hai',
    'lan cuoi',
    'lan super cuoi'
];

console.log(languages3.join('- '));
console.log(languages3.push('lan gan cuoi', 'xuoi cuoi'));
console.log(languages3.pop());
console.log(languages3.splice(1, 2, 'lan chen', 'lan chen 2'));// hoang so 1 xoa 2 dong
console.log(languages3.pop());
console.log(languages3.unshift('gan dau'));
console.log(languages3.shift());
console.log(languages3);

var languages4 = [
    'phan 2',
    'phan 3'
];

console.log(languages3.concat(languages4));
console.log(languages3.slice(1, 2));

// ham
/// tham so trong ham
function writeLog(mesage, mesage2, mesage3) {
    console.log(mesage)
    console.log(mesage2)
    console.log(mesage3)
}
writeLog('TEST', 'baitap');


function wg() {
    console.log(arguments);
}
wg('lop 1', 'lop 2');


function wri() {
    var myString3 = '';
    for (var param of arguments) {
        myString3 += `${param} - `
    }
    console.log(myString3);
}
wri('lop the a', 'lop the lam sao', 'the a');
///
function cong(ac, bc) {
    a + b;
    return '2' + '8';
    console.log('123');

}

var resul3 = cong(2, 8);
console.log(resul3);

///
function Showmessage() {
    function Showmessage2() {
        console.log('Mass');
    }
    Showmessage2();
}
Showmessage();
/// thieu cac loai funsion
//Polyfill : tự tạo function để đáp ứng trình duyệt cũ funcion trình duyệt mới

if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';

        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }
        if (start === undefined) { start = 0; }
        return this.indexOf(search, start) !== -1;
    };
}

var emailKey = 'email';

var myInfo =
{
    name: 'Son Dang',
    'nick-name': 'jamala',
    age: 18,
    address: 'Ha Noi,VN',
    [emailKey]: 'jim@gmail.vn',
    xoa: 'xoa',
    getName: function () //fun
    {
        return this.name;
    }

};

//function --> Phuong thuc / method :
// Others --> Thuoc tinh / property : name age...


var myKey = 'address';

myInfo.gmail = 'dominh130802@fullstack.edu.vn';
myInfo['your-email'] = 'jamalaleonardo@gmail.com';

console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo['address']);
console.log(myInfo[emailKey]);

console.log(myInfo.getName());
///
var User = function (firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Son', 'Dang', 'Avatar');
var user = new User('Vu', 'Nguyen', 'Avatar');

author.title = 'Chia se dao tai FB';
user.comment = 'Lieu co khoa asp.net k ad ';

console.log(author);
console.log(user);

///
function User(firstName1, lastName1, avatar1) {
    this.firstName1 = firstName1;
    this.lastName1 = lastName1;
    this.avatar1 = avatar1;
    this.getName = function () {
        return `${this.firstName1} ${this.lastName1}`
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function () {
    return this.className;
}
var user = new User('Son', 'Dang', 'Avatar 1');
var user2 = new User('Tan', 'Dang', 'Avatar 2');

console.log(user.className);
console.log(user2.getClassName());

///
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(`${day}/${month}/${year}`);
///
var date = 9;

if (date === 2) {
    console.log('hom nay la thu 2');
} else if (date === 9) {
    console.log('hom nay la thu 3');
} else if (date === 4) {
    console.log('hom nay la thu 4');
} else {
    console.log('khong biet');
}
///
var date1 = 5;

switch (date1) {
    case 2:
    case 3:
    case 4:
        console.log('hom nay la thu 2,3,4');
        break;

    case 5:
        console.log('hom nay la thu 5');
        break;

    default:
        console.log('khong biet dau');


}
///3ngoi
var course =
{
    name: 'Javascript',
    coin: 0
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien phi';
console.log(result);

var a = 1;
var b = 2;
var c = a > 0 ? a : b;
///
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
///
var myArray1 =
    [
        'javasc',
        'PHP',
        'Java',
        'Dart',
    ];
var arrayLength = myArray1.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myArray1[i]);
}
///

var myInfo1 =
{
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi,VN'
};
for (var key in myInfo1) {
    console.log(key);
    console.log(myInfo1[key]);
}
///
var languages5 =
    [
        'javascript',
        'php',
        'Ruby'
    ];

for (var key in languages5) {
    console.log(key);
    console.log(languages5[key]);
}

var myString4 = 'Javascript';
var languages5 = 'Javascript';

for (var key in languages5) {
    console.log(key);
    console.log(languages5[key]);
}

var myInfo2 =
{
    name: 'Son Dang',
    age: 18
};

for (var value of Object.keys(myInfo2)) {
    console.log(value);
}
console.log(Object.keys(myInfo2));
console.log(Object.values(myInfo2));
for (var value of Object.values(myInfo2)) {
    console.log(value);
}
/// bd

var i = 0;
while (i < 10) {

    console.log(i);
    i++;
}

var myArray2 =
    [
        'java',
        'PHP',
        'Ruby'
    ];

var i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}
var o = 0;
var i = 0;
var ii = 0;
var isSuccess1 = false;
var isSuccess2 = false;
//
do {
    o++;
    console.log(o);
} while (o < 10);

do {
    i++;
    console.log('Nap the lan ' + i);
    if (true) {
        isSuccess1 = true;
        console.log('thu nghiep true');
    }
} while (!isSuccess1 && i < 3);

do {
    ii++;
    console.log('Nap the game false lan ' + ii);
    if (false) {
        isSuccess2 = true;
        console.log('thu nghiep false');
    }
} while (!isSuccess2 && ii <= 3);
//

for (var i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}
for (var i = 0; i < 10; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
}

var myArray3 = [
    [1345, 2],
    [3, 4],
    [5, 6]
];

for (var i = 0; i < myArray3.length; i++) {
    console.log(myArray3[i]);
    for (var j = 0; j < myArray3[i].length; j++) {
        console.log(myArray3[i][j]);
    }
}

for (var i = 0; i <= 100; i += 5) {
    console.log(i);
}
for (var i = 10; i > 0; i--) {
    console.log(i);
}

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

//h

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

//Kha dai


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

var ig = 0;
//accumulator bien luu tru 
//currentValue gia tri hien tai
//currentValue chi muc cua currentvalue
//originArray 

function coinHandler(accumulator, currentValue, currentValue, originArray) {
    ig++;
    var total = accumulator + currentValue.coin;

    console.table(
        {
            'Luot chạy: ': ig,
            'Bien tich tru: ': accumulator,
            'Gia khoa hoc': currentValue.coin,
            'Tich tru duoc: ': total
        });
    return total;

}
var totalCoin = courses1.reduce(coinHandler, 0);
console.log(totalCoin);


//thu gon chi con la
var totalCoin = courses1.reduce((ai, bi) =>

    ai + bi.coin, 0
);

console.log(totalCoin);



//bai moi

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


///

var cd = 'Javcrop fdfdfd';
var dc = ['do trong minh', 'ngo tien linh', 'xuan bac'];
console.log(cd.includes('fdfdfd'));
console.log(dc.includes('xuan bac', 2));
console.log(dc.includes('do trong minh', -1)); // 3- -1 = 2
console.log(cd.includes('a', 1));


////

console.log(Math.PI);
console.log(Math.round(1.4)); //lam tron
console.log(Math.abs(-4)); //gia tri tuyet doi
console.log(Math.ceil(4.1)); // luon luon lam tròn trên
console.log(Math.floor(5.9));// luon luon lam truon duoi
console.log(Math.random()); // ngau nhien nho hon 1
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));
console.log(Math.min(90, 32, 56, 88));
console.log(Math.max(-100, 3, 55, 33, 99));

var random = Math.floor(Math.random() * 5);

var bonus = // ti le tuy
    [
        '10 coin',
        '20 coin',
        '60 coin',
        '40 coin',
        '90 coin',
    ];

console.log(bonus[random]); //ti le nho hon 50


var random = Math.floor(Math.random() * 100);
if (random < 5) {
    console.log('Cuong hoa thanh cong ');
} else {
    console.log('that bai');
}

/////////

function myFunction1(param) {
    if (typeof param === 'function')
        param('hoc lap trinh');
}
function myCallBack(value) {
    console.log('value: ', value);
}
myFunction1(myCallBack);
///

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



////

// Array.prototype.map2 = function(callback1) {
//     var output = [];
//     var arrayLength = this.length;

//     for (var i = 0; i < arrayLength; ++i) {
//         var result = callback1(this[i], i);
//         output.push(result);
//     }
//     return output;
// }

// var coursesf =
//     [
//         'javaaaa',
//         'ffdfd',
//         'fdfdf'
//     ];

// var htmlst = coursesf.map2(function(coursesf) {
//     return `<h3>${coursesf}</h3>`;
// });
// console.log(htmlst);


///
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

/// 1  



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


/// 

Array.prototype.filter2 = function(callback)
{
    var output = [];
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            var result = callback(this[index],index,this); 
            if(result)
            {
                output.push(this[index]);
            }
        }
    }
    return output;
}
var course8 =[
{
    name:'jg',
    coin: 680
},
{
    name: 'php',
    coin: 860
},
{
    name:'Ruby',
    coin: 980
}
];

var filterCourses = course8.filter(function(course8,index,array) // tra ve thu >700 
{
    return course8.coin > 700;
});

console.log(filterCourses);
console.log('cotttttt');
var filterCourses = course8.filter2(function(course8,index,array) // tra ve thu >700 
{
    return course8.coin > 700;
});

console.log(filterCourses);
//
console.log('cot');

Array.prototype.filter3 = function(callback)
{
    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            callback(this[index],index,this);
        }
    }
}

var course9 =[
    {
        name:'jg111',
        coin: 680
    },
    {
        name: 'php11',
        coin: 860
    },
    {
        name:'Ruby11',
        coin: 980
    }
];

console.log('kjh');
var filterCourses1 = course9.filter3(function(course9,index,array) // tra ve thu >700 
{
   console.log(course9,index,array);
});

console.log(filterCourses1);

/// cuoi cung

console.log('fffeesrgrgrg');
Array.prototype.some3 = function(callback)
{
    var output = false;

    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
            if (callback(this[index],index,this))
            {
                output =true;
                break;
            };
        }
        
    }
    return output;
    
}

var course10 =
[
    {
        name: 'Javascrip',
        coin: 680,
        isFinish: false,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true,
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    }

];

var result3 = course10.some3(function(course10,index,array)
{
    return course10.isFinish;
});
console.log(result3);


///
console.log('teee');

Array.prototype.every2 = function(callback)
{
    var output = true;

    for(var index in this)
    {
        if(this.hasOwnProperty(index))
        {
           var result = callback(this[index],index,this)
           {
            if(!result)
            {
                output = false;
                break;
            }
           }
        }
        
    }
    return output;
    
}

course11 = [
    {
        name:'duc',
        coin: 300,
        isfinish: true,
    },
    {
        name:'anh',
        coin: 380,
        isfinish: true,
    },
    {
        name:'uc',
        coin: 360,
        isfinish: false,
    }
];

var result4 = course11.every(function(course11,index,array)
{
return course11.isFinish;
});
console.log(result4);
console.log('teeef');
var result = course11.every2(function(course11,index,array)
{

    return course11.coin > 299;
});
console.log(result);

///
function countDown(num)
{
    if(num > 0)
    {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(10);


function loop(start,end,cb)
{
    if(start < end) 
    {
        cb(start);
        return loop(start + 1,end,cb);
    }
}

var array1 = ['Javascrop','PHPppp','Ruby'];
loop(0,array1.length,function(index)
{
    console.log(array1[index]);
});


function giaithua(number)
{
    var output =  1;
    for(var i = number; i > 0;i--)
    {
        output = output * i;
    }
    return output;
}
console.log(giaithua(6));

function giaithua(number)
{
    if(number > 0)
    {
        return number * giaithua(number - 1);
    }
    return 1;
}
console.log(giaithua(6));

//dequy

console.log('dequy');
function giaithua1(number1)
{
    if(number1 > 0)
    {
        return number1 * giaithua1(number1 - 1);
    }
    return 1;
}
console.log(giaithua1(6)); 

