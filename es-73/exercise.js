function printAsyncName(callBack, name1='name') {
    setTimeout(() => console.log(callBack), 1000);
    setTimeout(() => console.log(name1),2000);
}

printAsyncName('ciao', 'Mario')
