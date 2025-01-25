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
    var TranTuanTrung =
    [
   
        

  
      
    ];
console.log(languages2);
//in thong tin trong 1 doi tuong
console.log(TranTuanTrung);

console.log('true');
console.log(Array.isArray(languages2));
console.log(Array.isArray(TranTuanTrung));
console.log(languages2[3]);
/// lam viec moi mang
var languages3 = [
    'dau tien',
    'thu hai',
    'lan cuoi',
    'lan super cuoi'
];
var languages33 = [
    'dau tien',
    'thu hai',
    'lan cuoi',
    'lan super cuoi'
];

console.log(languages3.join('- '));
console.log('push');
console.log(languages3.push('lan gan cuoi', 'xuoi cuoi'));
console.log(languages2);
console.log(languages3.pop());
console.log(languages2);
console.log('push------');
console.log('push22');
console.log(languages33.splice(1, 2, 'lan chen', 'lan chen 2'));// hoang so 1 xoa 2 dong
console.log(languages3.pop());
console.log('dđ');
console.log(languages3.unshift('gan dau'));

console.log(languages3.shift());
console.log(languages3);
console.log('dđ');
console.log('phansau');
var languages4 = [
    'phan 2',
    'phan 3'
];


console.log(languages3.concat(languages4));
console.log(languages3.slice(1, 2));