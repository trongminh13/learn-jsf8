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