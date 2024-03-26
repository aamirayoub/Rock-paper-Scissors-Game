let userScore = 0;
let compScore = 0;

// to update the score board
const userUpdateScore = document.querySelector("#user-score");
const compUpdateScore = document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


// selecting the divs
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", ()=> {
        // console.log("choice selected");
        // accessing the id of divs
        // is ki jo id hogi wo userchoice main ajaey g
        const userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    })
})

// playGame function ko pata hoga k user ki choice kia hai
const playGame = (userchoice) => {
    console.log("user Choice = ", userchoice);
    // generate computer choice
    // genCompChoice wala function hamain random choice dey ga

    const compChoice = genCompChoice();
    console.log("comp choice is = ", compChoice);

    if (userchoice === compChoice) {
        drawGame ();
    }
    else {
        // assume user wins
        let userWin = true;

        if (userchoice === "rock"){
            //comp choice will be SCISSORS OR PAPER
            // agar comp ki choice paper hai to user loose means userwin variable main false ajaey ga
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            // comp choices // rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // user k pas ab baqi ek hi option buchey ga
            // SCISSORS
            // or comp have // rock and paper
            userWin = compChoice === "rock" ? false : true;
        }
        // to show who beats who, we are passing the userChoice and compChoice 
        showWinner (userWin, userchoice, compChoice);
    }

}

drawGame = () => {
    msg.innerText = "Game Draw, Play again";
    msg.style.background = "#081b31";
}

const genCompChoice = () => {
    // comp ko in main sy koi ek option choose karna hoga
    const options = ["rock", "paper", "scissors"];
    // so we use math.random
    const randomidx = Math.floor(Math.random () * 3);
    // randomidx variable index ka kam krey ga is lye hum issy option waley array main istemal krengy

    return options[randomidx];
    

}

// accessing usechoice and compchoice in this function 
const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        // console.log ("User Win");
        msg.innerText = "You Win! your " + userchoice + " beats " + compChoice;
        msg.style.background = "#008e00";
        userScore++;
        userUpdateScore.innerText = userScore;
    }
    else {
        // console.log ("Computer Wins");
        msg.innerText = "You Loose. " + compChoice + " beats your " + userchoice;
        msg.style.background = "red";
        compScore++;
        compUpdateScore.innerText = compScore;
    }


    // userWin ? console.log("You Win") : console.log ("You Loose");

    // userWin ? msg.innerText = "You Win" : msg.innerText = "You loose";



}





