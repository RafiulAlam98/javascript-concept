
console.log(greetings(7,8))

function greetings(a,b){
    console.log(a,b)
    function sayHi(){
        return a+b
    }
   var value = sayHi()
   return value
}

