  
  let userScore = 0;
  let computerScore = 0;
  let targetScore = 3
  const userScore_span = document.getElementById("user-score");
  const computerScore_span = document.getElementById("computer-score")
  const scoreBoard_div = document.querySelector(".score-board")//grabs the first class, which grabs everything inside the div tags // division of the website that holds the score
  //console.log(scoreBoard_div)
  const result_p = document.querySelector(".result > p")//returns the result of whether you won or not
  const rock_div = document.getElementById("r")//under div with class choices //division with id 'r' w/ pic of rock
  const paper_div = document.getElementById("p")
  const scissors_div = document.getElementById("s")//these grab the divs with the corresponding ID

function getComputerChoice(){
    
    const choices = ['r','p','s']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]//randomNumber iterates through the choices array and pulls the letters 
}
//console.log(getComputerChoice())



function convertToWord(letter){ //this function converts letters to 
    if(letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    return "Scissors"
}

//if (round reaches score of 10) or every time userChoice == win ; then add a point

function win(userChoice, computerChoice){
    
     userScore++;//increses user score by one
     userScore_span.innerHTML = userScore // shows score on page; grabs span tag in html
     computerScore_span.innerHTML = computerScore //span tags to manipulate them
     result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}`
     if (userScore === targetScore) {
     alert("You win!")
     resetGame()
    } else{
        return false
    }
 }

//  if (userScore === targetScore) {
//     alert("You win!")
//     resetGame()
//    } else if (computerScore === targetScore) {
//     alert("You lose!")
//     resetGame() 
//     } else if (computerScore && userScore === targetScore) {
//     alert("It's a Draw!");
//     resetGame()
//     } else if(userScore ){
//          return false
//     }

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore 
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)} :(`
    
    if (computerScore === targetScore) {
    alert("You lose!")
    resetGame() 
    } else {
        return false
    }
}

function draw(userChoice, computerChoice){
    
    
    // computerScore++;
    //userScore_span.innerHTML = userScore 
    //computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a Draw`
    if (computerScore && userScore === targetScore) {
    alert("It's a Draw!");
    resetGame()
    } else {
         return false
    }
}


function resetGame () {
    userScore=0;
    computerScore=0
}


 function game(userChoice){ //this checks user input against computers math.random
     const computerChoice = getComputerChoice()//which is the r, p, s's//grabs the random generator of these functions


    switch(userChoice + computerChoice){// r + math.random() if i click r then it checks against random letters and then
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break;
       }
    }
    
    

function main(){//has all the event listeners
    

    rock_div.addEventListener('click', function() { 
        game("r")//passes r through game function that has switch
    })

    paper_div.addEventListener('click', function() {
        game("p")
    })
        

    scissors_div.addEventListener('click', function() {
        game("s")
    })
    
}

main()
