// javascript file  

var reloadPage = () => {
    window.location.reload()
    
}

let winner = Math.floor(Math.random()*40)
    console.log(winner)
    
let loser = Math.floor(Math.random()*40)

var counter = 8

// function changeChar(location) {
//    counter = counter - 1
//    document.getElementById("counter").innerHTML = counter;
//}

var decrement = () => {
    counter = counter - 1
    if(counter === 0) {
        alert("You lose!")
    }
    document.getElementById("counter").innerHTML = counter
}

var changeChar = (loc) => {
    if(loc === winner) {
        alert("You found Luke!")
      document.getElementById(loc).innerHTML = "!"  
    }
    else if(loc === loser) {
        alert("You found Vader!") 
      document.getElementById(loc).innerHTML = "X"   
    }
    else {
        counter = counter-1 
        document.getElementById("counter").innerHTML = counter
        if(counter === 0) {
            alert("You lose!") 
    }
      document.getElementById(loc).innerHTML = "0"  
}
}
