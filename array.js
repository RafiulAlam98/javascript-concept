var arr = [0, 1, 2, 3, 4];

arr.push(6);
arr.unshift(9);


arr.splice(4,0,5) 

arr[3]=0

arr.pop() // last element remove

arr.shift() //first element remove

arr.splice(3,3) //element position, how much element to delete

console.log(arr);
