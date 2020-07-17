  let userScore = 0;
  let computerScore = 0;
  let targetScore = 5
  const userScore_span = document.getElementById("user-score");//returns 0
  const computerScore_span = document.getElementById("computer-score")
  const scoreBoard_div = document.querySelector(".score-board")//grabs the first class // division of the website that holds the score
  //console.log(scoreBoard_div)
  const result_p = document.querySelector(".result > p")//returns the result of whether you won or not
  const rock_div = document.getElementById("r")//under div with class choices //division with id 'r' w/ pic of rock
  const paper_div = document.getElementById("p")//so you have to put a divison within a division to divide things up
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
     alert("You win!");

     resetGame();

    } else{
        return
    }//else if (userScore > targetScore) {
    //      alert("Final User Score: " + userScore + ". You busted! Try again!");
    //      lose()
    //      resetGame();
    //  }
     
     //document.getElementById(userChoice)
//      if(userScore++){
//         //console.log('computer wins!! this round :(')//how do I make it appear this round
//         result_p.innerHTML = "user wins!! this round :)"
    
//   } 
 }




function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore 
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)} :(`
    
    if (computerScore === targetScore) {
    alert("You lose!");
    
    resetGame();

    }
    //     if(userScore = 10){
//         //console.log('computer wins!! this round :(')//how do I make it appear this round
//         result_p.innerHTML = "computer wins!! this round :("
    
//   }
}

function draw(userChoice, computerChoice){
    
    
    // computerScore++;
    userScore_span.innerHTML = userScore 
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a Draw`
    if (computerScore && userScore === targetScore) {
    alert("It's a Draw!");
    
    resetGame()
    }
    //  if(userScore <= 10){
    //     //console.log('user wins, this round')
    //     result_p.innerHTML = "no one wins"
    //  }
}


function resetGame () {
    userScore=0;
    computerScore=0
    
    }


 function game(userChoice){ //this checks user input against computers math.random
     const computerChoice = getComputerChoice()//recursive function//which is the r, p, s's//grabs the random generator of these functions


    switch(userChoice + computerChoice){// r + math.random() if i click r then it checks against random letters and then
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)//{
            //     if(userChoice){
            //         console.log('user wins round 1')
            //     }
            // }//run the win function up there
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

    // function targetScore(){
    //      targetScore = 5
    // }

    
    

function main(){//has all the event listeners
    

    rock_div.addEventListener('click', function() { 
        game("r")//passes r through game function that has switch
        
        // function win(userChoice, computerChoice){
        //     userScore++;//increses user score by one
        //     userScore_span.innerHTML = userScore // shows score on page; grabs span tag in html
        //     computerScore_span.innerHTML = computerScore //span tags to manipulate them
        //     result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} , You won!!`
        //     document.getElementById(userChoice)
            
        //     //result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} , You won!!`
           
        // }
        
    })

    paper_div.addEventListener('click', function() {
        game("p")
    })
        

    scissors_div.addEventListener('click', function() {
        game("s")
    })
    
}

main()
