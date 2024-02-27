var i = 10
while(i < 10){
    console.log("Rafiul Alam")
    i++;
}



while(true){
    var rand = Math.floor(Math.random()*10 )
    if (rand == 9){
        console.log("You Win")
        break
    }
    else{
        console.log("You have got ", rand)
    }
}