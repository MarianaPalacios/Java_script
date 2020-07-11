//named funtion
function addNum(a,b){
    console.log("funtion addNum is called");
    return a+b;
}

console.log(addNum(2,3));
var sum= addNum(2,3);
console.log(sum);

//Anonimus funtion

var anon=function(a,b){
  console.log("anonymous frunction is called");
  return a+b;
}

console.log(anon(5,6));

//constructors
var cons=new function("a","b","console.log('in constructors function'); return a+b;");
console.log(cons(3,5));

//self invoking function
(function(a,b){
  console.log("in self invoking function");
  return a+b;
})(2,6);
