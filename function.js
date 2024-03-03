function sum (c,d){
   return c+d
}
//function declaration
function sample(a,b,cb){
   var c = a+b
   var d = a-b
   var result = cb(c,d)
   return result
}

let result = sample(22,11,sum)//function call
let result2 = sample(22,11,sub)//function call
let result3 = sample(22,11,function mul (c,d){
   return c*d
})//function call
console.log(result)


