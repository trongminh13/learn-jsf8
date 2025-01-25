function logger(log, isAlert = false)
{
    if(isAlert)
    return alert(log);
console.log(log);
}

logger('Messge',true);

function loggerr(log, type = 'log')
{
console[type](log);
}

logger('Messge...');