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