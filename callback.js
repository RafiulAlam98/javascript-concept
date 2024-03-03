function sample (a,b,cb){
    var c = a+b
    var d = a-b
    var result = cb(c,d)
    return result
}

function sum(a,b){
    return a+b
}

var result = sample(16,8,sum)


var result2 = sample(16,8,function sub(c,d){
    return c-d
})



var result3 = sample(16,8,function mul(c,d){
    return c*d
})


console.log( "result prints here",result3)