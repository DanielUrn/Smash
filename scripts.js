//ELEMENTS (MOLES)
const elemento = [document.getElementById("block-1"),document.getElementById("block-2"),document.getElementById("block-3"),document.getElementById("block-4"),document.getElementById("block-5"),document.getElementById("block-6"),document.getElementById("block-7"),document.getElementById("block-8"),document.getElementById("block-9")]
const scorelement = document.getElementsByClassName("score")


//GAME VARIABLES
var score=0;
scorelement[0].setAttribute('value',score);
let x=60;
var stop;

//MATH FUNCTIONS
function getRandom(min,max){
    random = Math.floor(Math.random() * (max-min) + min) ;
    return random;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


//GAME
function popMole(index){
    if(elemento[index].classList == "col"){
        elemento[index].classList.replace("col","pop")
    }
}

function smashMole(pop){
    if(elemento[pop].classList == "pop"){
        elemento[pop].classList.replace("pop","col");
        addScore();
    }
}


function reverseMole(index){
    if(elemento[index].classList == "pop"){
        elemento[index].classList.replace("pop","col")
    }
}

function addScore(){
    score +=10;
    scorelement[0].setAttribute('value',score);
}


function endGame(){

    const game = document.getElementsByClassName("hide")
    game[0].classList.replace("hide","finish")
}

async function start(){
    
    while(1){

        const mole = getRandom(0,8);

        await sleep(400);
        popMole(mole);

        stop = setTimeout( function(){
            reverseMole(mole);
        },600)

        elemento[mole].addEventListener("click", function(){
            clearTimeout(stop);
            smashMole(mole);

        },false)

        x--;
        
        if(x<0){
            endGame()
            break;   
        }
    }
}

function button(){
    start();
}