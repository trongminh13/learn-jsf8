function myFunction1(param) {
    if (typeof param === 'function')
        param('hoc lap trinh');
}
function myCallBack(value) {
    console.log('value: ', value);
}
myFunction1(myCallBack);