// javascript file  

var reloadPage = () => {
    window.location.reload()
    
}

let winner = Math.floor(Math.random()*40)
// If you leave this in here, the user can just Inspect Element and see how to win every time haha!
console.log(winner)

let loser = Math.floor(Math.random()*40)

var counter = 8

// function changeChar(location) {
//    counter = counter - 1
//    document.getElementById("counter").innerHTML = counter;
//}

// Comment what this function does
var decrement = () => {
    counter = counter - 1
    if(counter === 0) {
        alert("You lose!")
    }
    document.getElementById("counter").innerHTML = counter
}

// Comment what this function does
var changeChar = (loc) => {
    if(loc === winner) {
        // Add comments about how you get to this state
        document.getElementById(loc).innerHTML = "<img src='https://live.staticflickr.com/670/22157075442_6d96672b7b_b.jpg' height='200'>"
        alert("You found Luke!") 
        window.setTimeout(reloadPage, 3000);
    }
    else if(loc === loser) {
        // Add comments about how you get to this state
        document.getElementById(loc).innerHTML = "<img src='https://pngimg.com/uploads/darth_vader/darth_vader_PNG7.png' height='200'>"
        alert("You found Vader!") 
        window.setTimeout(reloadPage, 3000);
    }
    else {
        // Add comments about how you get to this state
        counter = counter-1 
        document.getElementById("counter").innerHTML = counter
        if(counter === 0) {
            alert("You lose!")
            window.location.reload () 
        }
        // When indenting, always use tab (not spaces)
        document.getElementById(loc).innerHTML = "<img src='images/light-saber.png' height='30'>"  
    }
}
