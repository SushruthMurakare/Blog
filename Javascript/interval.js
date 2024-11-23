//serInterval and clearInterval

//Similar to timeout functions we have interval
//Timeout functions run only once after the delay but setInterval and runs in interval of the given time and clearTimeout stops the interval

const timer = setInterval(()=> console.log("I print once every second"), 1000);

setTimeout(()=> clearInterval(timer), 5000); // stops the interval after 5 seconds which means the interval will be stopped after 4 executions because it executes for every second
