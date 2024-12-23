// function add(a,b){
//     return a + b;
// }

// let add =function (a,b){
//     return a + b;
// }

// let add =(a,b)=>{
//     return a+b;
// }

// let add =(a,b)=> a+b;

// const result=add(12,4);
// console.log(result);


//callback


function add(a,b,c){
    const result= a+b
    console.log(result);
    c();
}

add(23,43,()=>console.log("Its callback"))

var age=19;

module.exports={age}