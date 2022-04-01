// -----------------------------------------------------------------------
// ------------------------ Shared -------------------------------------
// ----------------------------------------------------------------------
const hero = document.querySelector(".hero");
const pageContainer = document.getElementById("pageContainer");
const pageHeader = document.getElementById("pageHeader");
const gameboardContainer = document.querySelector(".gameboardContainer");

const onePlayerGame = document.getElementById("onePlayerGame");
const twoPlayerGame = document.getElementById("twoPlayerGame");
// // ----------------------------------------------------------------------
// // ----------------------Single player-----------------------------------
// // ----------------------------------------------------------------------
const gameboard = document.getElementById("gameboard");
const scoreCard = document.getElementById("scoreCard");
const score = document.getElementById("score");
const roll = document.getElementById("roll");
const container = document.getElementById("container");
const dice = document.getElementById ("dice");
const actionButtons = document.querySelector(".actionButtons");
const rollDice = document.getElementById("rollDice");
const playAgain = document.getElementById("playAgain");

let playerTotal = 0;

rollDice.addEventListener('click', () => {
	let currentRoll = Math.ceil(Math.random() * 6);

	roll.style.display = "none";
	dice.style.display = "";
	playAgain.style.display = "none";
	rollDice.style.display = "none";
	
	dice.src = `images/${currentRoll}Player1.png`;

	playerTotal += currentRoll;
	score.textContent = playerTotal;

	roll.style.display = "";
	rollDice.style.display = "";

	if (playerTotal >= 20) {
		score.textContent = `${playerTotal} - You Won!`;
		score.style.fontWeight = "bold";
		dice.style.backgroundColor = "#50C878";
		score.style.backgroundColor = "#50C878";
		gameboard.style.backgroundColor = "#50C878";

		playerTotal = 0;

		rollDice.style.display = "none";
		playAgain.style.display = "";
		playAgain.style.backgroundColor = "#FFFFFF";
	} else {
		if (currentRoll == 1) {
			score.textContent = `${playerTotal} - You lost!`;
			score.style.fontWeight = "bold";
			container.style.backgroundColor = "#AA0039";
			scoreCard.style.backgroundColor = "#AA0039";
			gameboard.style.backgroundColor = "#AA0039";

			playerTotal = 0;
			
			playAgain.style.display = "";
			rollDice.style.display = "none";
			roll.style.display = "none";
			playAgain.style.backgroundColor = "#FFFFFF";
		}
	}
});

playAgain.addEventListener('click', () => {
	window.location.reload()
});

