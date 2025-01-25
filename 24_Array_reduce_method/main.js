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
