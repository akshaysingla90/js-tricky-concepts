//my approach in which i am executing function first and then waiting for 2 sec after its completion
function throttle(func, delay) {
    let shouldWait = false;
    return function (...args) {
        console.log(args[0] + '  -> shouldWait: ', shouldWait);
        if(shouldWait) return;
        shouldWait = true;
        func(...args); //execute
        setTimeout(function () {
            shouldWait = false;
        }, delay);
    };
}

//right approach it will work for functions taking time 
function throttle(func, delay) { 
    let lastCall = 0; 
    return function (...args) { 
        const now = new Date().getTime(); 
        if (now - lastCall < delay) { 
            return; 
        } 
        lastCall = now; 
        func(...args); 
    }; 
} 



async function funcToExec(id) { 
    console.log( id + "  -> Executed  !!!!! "); 
    for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
        //Blocking: Will take some time to complete
    }
} 

let decoratorFunction = throttle(funcToExec, 2000) 

//calling it multiple times 

//will work
decoratorFunction('1')
decoratorFunction('2')
decoratorFunction('3')

//will work
setTimeout(()=>{
    decoratorFunction('4')
},2500)
setTimeout(()=>{
    decoratorFunction('5')
},2700)

setTimeout(()=>{
    decoratorFunction('6')
},3700)

//will work
setTimeout(()=>{
    decoratorFunction('7')
},4505)
