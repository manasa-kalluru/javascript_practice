




let count =0;
let identifier = setInterval(function interval(){
    console.log("interval set", ++count);
    if(count === 5){
        clearInterval(identifier);
    }
    
}, 100);


// setTimeout(function clearInt(){
//     clearInterval(identifier);
// },10000);


// let timeout = setTimeout(function a(){

//     console.log("set timeout called");

// },0);

// console.log("print",timeout);
// clearTimeout(timeout);


