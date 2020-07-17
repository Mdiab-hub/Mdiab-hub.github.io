// function game() {
//     for (var i = 1; i <= 3; i++) {
//       round();
//     }
//   }
  
//   function round() {
//     var userChoice = prompt("Do you choose rock, paper or scissors?");
//     var computerChoice = Math.random();
//     if (computerChoice < 0.34) {
//       computerChoice = "rock";
//     } else if(computerChoice <= 0.67) {
//       computerChoice = "paper";
//     } else {
//       computerChoice = "scissors";
//     }
//     console.log("Computer: " + computerChoice);
//     console.log("User: " + userChoice);
//     var message = compare(userChoice, computerChoice);
//     console.log(message);
//   }
  
//   function compare (choice1, choice2) {
//     if (choice1 === choice2) {
//       return "The result is a tie!";
//     } else if (choice1 === "rock") {
//       if (choice2 === "scissors") {
//         return "rock wins";
//       } else {
//         return "paper wins";
//       }
//     } else if (choice1 === "paper") {
//       if (choice2 === "scissors") {
//        return "scissors wins";
//       } else {
//         return "paper wins";
//       }
//     } else if (choice1 === "scissors") {
//       if (choice2 === "paper") {
//         return "scissors wins";
//       } else {
//         return "rock wins";
//       }
//     }
//   }

// function getComputerChoice() {
//   const choices = ['q', 'r', 's']
//   const randomNumber = Math.floor(Math.random() * 3)
//   console.log(choices[randomNumber])
// }

// getComputerChoice()//so what am I confused about

let rock = document.getElementById('r')
let scissor = document.getElementById('s')
let paper = document.getElementById('p')

let player1
let player2
const choice2 = ['rock', 'paper', 'scissors']
let body = document.getElementsByTagName("body")[0]
let player1Score = 0
let botScoreBackend = 0
let userScore = document.createElement('div')
let botScore = document.createElement('div')
body.appendChild(userScore)
body.appendChild(botScore)

const weapons = {
  paper: "paper",
  rock: "rock",
  scissor: "scissors"
}

rock.addEventListener('click', () => {
  //player1 = rock.value
  //console.log(player1)

  let bot = choice2[Math.floor(Math.random()*3)]
  console.log(bot)
  if(bot === 'paper'){
    console.log('you lose')
    botScoreBackend += 1;
    botScore.innerHTML = botScoreBackend

} else if (bot === 'rock'){
  console.log('it was draw')
}else{
  console.log('you won')
  player1Score += 1;
  userScore.innerHTML = player1Score
}

if(botScore === 3){
  console.log('bot won')
  botScore = 0
  player1Score = 0
} else if (player1Score === 3){
  console.log('you win')
}
})


var targetScore = 0; 
var userScore = 0;
var wins = 0;
var losses = 0; 

var crystalArray = ['rock', 'paper', 'scissors']
// --- Functions ---

    // to CREATE crystal images
function createCrystals() {
    for (var i=0; i<crystalArray.length; i++) {
    var randomVal = Math.floor(Math.random()*12 + 1);
        var img = $("<img>")
            img.addClass('crystal-img');
            img.attr('id', 'crystal-'+(i+1));
            img.attr('src', crystalArray[i]);
            img.attr('val', randomVal)
        $("#crystals").append(img);
    }
}

    // for TARGET SCORE to get a RANDOM NUM between 19-120 (120-19 = 101)
function targetScoreSelector () {
    targetScore = 5 
        // console.log("Target Score: " + targetScore);
    $("#targetScore-text").text(targetScore);
}

    // to UPDATE crystal values after each game
function getComputerChoice() {
    for (var i=0; i<crystalArray.length; i++) {
        var randomVal = Math.floor(Math.random()*12 + 1);
        $("#crystal-"+ i).attr('val', randomVal)
    }
}

    // to RESET game
function resetGame () {
    updateCrystals();
    targetScoreSelector();
    userScore=0;
    $("#userScore-text").text(userScore);
}



// --- Main Process ---

createCrystals();

targetScoreSelector();

$(".crystal-img").on("click", function () {
    //console.log("This is a crystal");

    //make user score based on random crystal values
    var crystalVal = $(this).attr('val');
        console.log("Crystal Value: " + crystalVal);

    userScore += parseInt(crystalVal);
        // console.log("User Score: " + userScore);
    $("#userScore-text").text(userScore);

    if (userScore === targetScore) {
        alert("You win!");
        wins++;
        $("#wins-text").text(wins);
        resetGame();

    } else if (userScore > targetScore) {
        alert("Final User Score: " + userScore + ". You busted! Try again!");
        losses++;
        $("#losses-text").text(losses);
        resetGame();
    }

});