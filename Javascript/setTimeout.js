//setTimeout is a functon through which you can schedule a function passed to it
//setTimeout takes 2 args which is callback to execute and time to delay in milliseconds
//1 second = 1000 milliseconds

let time = 3000;

function sayHello(t){
    console.log(`Hello after ${t} milliseconds`)
}
setTimeout(()=> sayHello(time), time)


//clearTimeout

//clearTimeout can cancel a timeout set by setTimeout before it triggers

let clear = setTimeout(()=> sayHello(1000), 1000);
clearTimeout(clear)