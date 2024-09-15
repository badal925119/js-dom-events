// option 2

function makeRed(){
    document.body.style.backgroundColor='red'
}

// option-3
const makeBlueBatton = document.getElementById('make-blue')
makeBlueBatton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue'
}

// option-4
const makePurpleBatton = document.getElementById('make-purple')
makePurpleBatton.onclick = function makePurple(){
    document.body.style.backgroundColor='purple'
}


// option-5
const pikBatton = document.getElementById('make-pink')
pikBatton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor='pink'
}

// Option-6
const makeGreenButton = document.getElementById('make-green')
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor='green'
})

// most of the use this option

document.getElementById('make-tomato').addEventListener('click', function(){
    document.body.style.backgroundColor='tomato'
})