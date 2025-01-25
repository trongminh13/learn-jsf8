for (var i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}
console.log('gf');
for (var i = 0; i < 10; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
}