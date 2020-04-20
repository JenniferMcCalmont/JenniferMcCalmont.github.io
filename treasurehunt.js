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
        
      document.getElementById(loc).innerHTML = "<img src='https://live.staticflickr.com/670/22157075442_6d96672b7b_b.jpg' height='200'>"
      alert("You found Luke!") 
      window.setTimeout(reloadPage, 3000);
    }
    else if(loc === loser) {
        document.getElementById(loc).innerHTML = "<img src='https://pngimg.com/uploads/darth_vader/darth_vader_PNG7.png' height='200'>"
        alert("You found Vader!") 
        window.setTimeout(reloadPage, 3000);
    }
    else {
        counter = counter-1 
        document.getElementById("counter").innerHTML = counter
        if(counter === 0) {
            alert("You lose!")
            window.location.reload () 
        }
      document.getElementById(loc).innerHTML = "<img src='images/light-saber.png' height='30'>"  
    }
}
