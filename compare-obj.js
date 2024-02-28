var obj1 = {
    x:10,
    y:20
}

var obj2 ={
    x:10,
    y:20
}

console.log(obj1)

console.log(JSON.stringify(obj1))

console.log(JSON.stringify(obj1) === JSON.stringify(obj2))