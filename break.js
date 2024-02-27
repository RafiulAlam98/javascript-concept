while(true){
    var rand = Math.floor(Math.random()*10 + 1)
    if (rand == 9){
        console.log("You Win and got 9")
        isRunning = false
        break;
    }
    else{
        console.log("You have got ", rand)
    }

}