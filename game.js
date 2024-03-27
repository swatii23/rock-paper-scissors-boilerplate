var playerMove;
var compMove;
var score1 = 0;
var score2 = 0;

const playerScore = document.getElementById("player-score");
const compScore = document.getElementById("comp-score");

document.getElementById("rock-button").addEventListener("click", () => {
    gestureImage(1);
    playGame(1, "rock");
});
document.getElementById("paper-button").addEventListener("click", () => {
    gestureImage(2);
    playGame(2, "paper");
});
document.getElementById("scissor-button").addEventListener("click", () => {
    gestureImage(3);
    playGame(3, "scissor");
});

function gestureImage(id) {
    console.log("clicked " + id);
    document.getElementById("placeholder1").style.display = "none";
    const images = document.getElementsByClassName("p1");
    for(let i=0; i<images.length; i++) {
        images[i].style.display = "none";
    }
    document.getElementById(id).style.display = "inherit";
}

function generateCompImage() {
    const images = document.getElementsByClassName("p2");
    let compMove = ["paper", "rock", "scissor"];
    let ind = Math.floor(Math.random() * images.length);
    document.getElementById("placeholder2").style.display = "none";
    for(let i=0; i<images.length; i++) {
        images[i].style.display = "none";
    }
    document.getElementById(ind+4).style.display = "inherit";
    return compMove[ind];
}

function playGame(id, playerMove) {
    compMove = generateCompImage();
    // playerMove = playerMovefn(id);
    console.log(playerMove+" "+ compMove)
    if (playerMove === compMove) {
        generateScore("");
    } else if ((playerMove === "rock" && compMove === "scissor") ||
               (playerMove === "paper" && compMove === "rock") ||
               (playerMove === "scissor" && compMove === "paper")) {
        generateScore("player");
    } else {
        generateScore("comp");
    }
}

function generateScore(player) {
    switch (player) {
        case "player":
            score1++;
            break;

        case "comp":
            score2++;
            break;
    
        default:
            break;
    }
    console.log(score1 +" "+ score2)
    playerScore.textContent = score1;
    compScore.textContent = score2;
    declareWinner();
}

function declareWinner() {
    if(score1 == 5 || score2 == 5){
        let options = document.getElementsByClassName("option-logo");
        for(let i=0; i<options.length; i++) {
            options[i].style.display = "none";
        }

        document.getElementById("result-div").style.display = "block";

        if(score1 > score2) {
            document.querySelector(".text > span").textContent = "You";
        } else if(score1 < score2) {
            document.querySelector(".text > span").textContent = "Comp";
        } else {
            document.querySelector(".text").innerHTML = "Match Tied"
        }
    }
}

document.getElementById("play-again-button").onclick = () => {
    window.location.reload();
}