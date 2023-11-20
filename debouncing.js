function debounce(func, delay) {
    let timerId;
    return function (...args) {
        console.log('TimerID: ',!!timerId);
        clearTimeout(timerId);
        timerId = setTimeout(function () {
            func.apply(this, args);
        }, delay);
    };
}


function funcToExec(id) { 
    console.log( id + "  -> Executed after 3 sec !!!!! "); 
} 

let decoratorFunction = debounce(funcToExec, 3000) 

//calling it multiple times 
decoratorFunction('1')
//1 sec 
decoratorFunction('2')
decoratorFunction('3')

setTimeout(()=>{
    decoratorFunction('4')
},2500)
