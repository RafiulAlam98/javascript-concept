function add (a,b){
    return a+b
}

function manipulate(a,b, func){
    var c = a+b
    var d = a-b 
    function multiply(){
        var m = func(c,d)
        return c*d*m
    }
    return multiply
}

const result = manipulate()
console.log(result())