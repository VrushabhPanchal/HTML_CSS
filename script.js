
//var let const
var a = 10;
// let a = 20;
const b = 22;
console.log(a,b,a);

//-----------------refrence types-----------------
// refrence = [] {} ()
// primitives = numbers stings null undefined bool

var list = [1,2,3,4];
var list2 = list;
list.pop();
var map = {a:1,b:2};

//---------------- conditional ----------------------------------

if(10>9){
    console.log("yes");
}
else{
    console.log("no");
}
//---------------- Loops ----------------------------------

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

//---------------- Function ----------------------------------

function preps() {
    console.log("this is from function");
}
function peramertiseFunction(a,b,c) {
    console.log("this is from perameterise function "+ a + b + c );
}

preps();
peramertiseFunction(12,13,14);

//---------------- Arrays ----------------------------------

var arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);
arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(11);
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(2,2);
console.log(arr);

//---------------- Objects ----------------------------------

var watch ={
    brand : "Rolex",
    price : 2000000,
    color : "metalic green",
    type :  "automatic",
    isWorking : function () { }
    
}

//---------------- Copy Refrence Value ----------------------------------

var array = [1,2,3,4,5];
var copyArr = [...array];

var obj = { name : "vrushabh"}
var copyObj = {...obj}

//---------------- Truthy Falsy ----------------------------------

if(0){
    console.log("hey");
}
else{
    console.log("hello");
}

//---------------- forEach forIn do while ----------------------------------

var arr2 = [1,33,24,35,46,43,,57,64,65,55,34,53];

arr2.forEach(function (val) {
    console.log(val+2);
    
})

var obj = {
    name : "vrushabh",
    age : 24,
    city : "ahem"
}

for(var key in obj){
    console.log(key,obj[key]);
    
}

var a = 12;
do {
    console.log(a);
    a++;
} while (a < 12);


//---------------- Callback function ----------------------------------

setTimeout(function() {
    console.log("2 seconeds ke baad call ");
    
}, 2000);