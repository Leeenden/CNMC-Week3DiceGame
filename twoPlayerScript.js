// ---------------------------------------------------------------------
// ----------------------Multiplayer Game--------------------------------
// ------------------------ Player 1 ------------------------------------
// ----------------------------------------------------------------------
const gameboardPlayer1 = document.getElementById("gameboardPlayer1");
const scoreCardPlayer1 = document.getElementById("scoreCardPlayer1");
const scorePlayer1 = document.getElementById("scorePlayer1");
const rollPlayer1 = document.getElementById("rollPlayer1");
const containerPlayer1 = document.getElementById("containerPlayer1");
const dicePlayer1 = document.getElementById ("dicePlayer1");
const actionButtonsPlayer1 = document.querySelector(".actionButtonsPlayer1");
const rollDicePlayer1 = document.getElementById("rollDicePlayer1");
const playAgainPlayer1 = document.getElementById("playAgainPlayer1");
const diceAudio = new Audio("diceroll.mp3");
const winAudio = new Audio("victory.wav");
const lossAudio = new Audio("loss.wav");


let player1Total = 0;

rollDicePlayer1.addEventListener('click', ()=> {
	diceAudio.play(); 
	let currentRoll = Math.ceil(Math.random() * 6);

	rollPlayer1.style.display = "none";
	dicePlayer1.style.display = "";
	playAgainPlayer1.style.display = "none";
	rollDicePlayer1.style.display = "none";
	
	dicePlayer1.src = `images/${currentRoll}Player1.png`;

	player1Total += currentRoll;
	scorePlayer1.textContent = player1Total;

	rollPlayer2.style.display = "";
	rollDicePlayer2.style.display = "";

	if (player1Total >= 20) {
		scorePlayer1.textContent = `${player1Total} - You Won!`;
		scorePlayer1.style.fontWeight = "bold";
		dicePlayer1.style.backgroundColor = "#50C878";
		scoreCardPlayer1.style.backgroundColor = "#50C878";
		gameboardPlayer1.style.backgroundColor = "#50C878";

		player1Total = 0;

		rollDicePlayer1.style.display = "none";
		playAgainPlayer1.style.display = "";
		playAgainPlayer1.style.backgroundColor = "#FFFFFF";

		scorePlayer2.textContent = `${player2Total} - You lost!`;
		lossAudio.play();
		scorePlayer2.style.fontWeight = "bold";
		containerPlayer2.style.backgroundColor = "#AA0039";
		scoreCardPlayer2.style.backgroundColor = "#AA0039";
		gameboardPlayer2.style.backgroundColor = "#AA0039";

		player2Total = 0;
			
		rollDicePlayer2.style.display = "none";
		playAgainPlayer2.style.display = "";
		playAgainPlayer2.style.backgroundColor = "#FFFFFF";
		
	} else {
		if (currentRoll == 1) {
			lossAudio.play();
			scorePlayer1.textContent = `${player1Total} - You lost!`;
			scorePlayer1.style.fontWeight = "bold";
			containerPlayer1.style.backgroundColor = "#AA0039";
			scoreCardPlayer1.style.backgroundColor = "#AA0039";
			gameboardPlayer1.style.backgroundColor = "#AA0039";

			player1Total = 0;
			
			rollDicePlayer1.style.display = "none";
			playAgainPlayer1.style.display = "";
			playAgainPlayer1.style.backgroundColor = "#FFFFFF";

			scorePlayer2.textContent = `${player2Total} - Winner!`;
			winAudio.play();
			scorePlayer2.style.fontWeight = "bold";
			dicePlayer2.style.backgroundColor = "#50C878";
			scoreCardPlayer2.style.backgroundColor = "#50C878";
			gameboardPlayer2.style.backgroundColor = "#50C878";

			player2Total = 0;

			rollPlayer2.style.display = "none";
			rollDicePlayer2.style.display = "none";
			playAgainPlayer2.style.display = "";
			playAgainPlayer2.style.backgroundColor = "#FFFFFF";
		}
	}
});

playAgainPlayer1.addEventListener('click', () => {
	playAgainPlayer1.style.border = "4px solid black";
	if (playAgainPlayer1.style.border == playAgainPlayer2.style.border){
		window.location.reload();
	}
});

// -----------------------------------------------------------------------
// ------------------------ Player 2 ------------------------------------
// ----------------------------------------------------------------------
const gameboardPlayer2 = document.getElementById("gameboardPlayer2");
const scoreCardPlayer2 = document.getElementById("scoreCardPlayer2");
const scorePlayer2 = document.getElementById("scorePlayer2");
const rollPlayer2 = document.getElementById("rollPlayer2");
const containerPlayer2 = document.getElementById("containerPlayer2");
const dicePlayer2 = document.getElementById ("dicePlayer2");
const actionButtonsPlayer2 = document.querySelector(".actionButtonsPlayer2");
const rollDicePlayer2 = document.getElementById("rollDicePlayer2");
const playAgainPlayer2 = document.getElementById("playAgainPlayer2");

let player2Total = 0;

rollDicePlayer2.addEventListener('click', () => {
	diceAudio.play(); 
	let currentRoll = Math.ceil(Math.random() * 6);

	rollPlayer2.style.display = "none";
	dicePlayer2.style.display = "";
	playAgainPlayer2.style.display = "none";
	rollDicePlayer2.style.display = "none";
	rollDicePlayer1.style.display = "";
	dicePlayer2.src = `images/${currentRoll}Player2.png`;

	player2Total += currentRoll;
	scorePlayer2.textContent = player2Total;

	rollPlayer1.style.display = "";

	if (player2Total >= 20) {
		lossAudio.play();
		scorePlayer2.textContent = `${player2Total} - Winner!`;
		scorePlayer2.style.fontWeight = "bold";
		dicePlayer2.style.backgroundColor = "#50C878";
		scoreCardPlayer2.style.backgroundColor = "#50C878";
		gameboardPlayer2.style.backgroundColor = "#50C878";

		player2Total = 0;

		rollDicePlayer2.style.display = "none";
		playAgainPlayer2.style.display = "";
		playAgainPlayer2.style.backgroundColor = "#FFFFFF";

		scorePlayer1.textContent = `${player1Total} - You lost!`;
		winAudio.play();
		scorePlayer1.style.fontWeight = "bold";
		containerPlayer1.style.backgroundColor = "#AA0039";
		scoreCardPlayer1.style.backgroundColor = "#AA0039";
		gameboardPlayer1.style.backgroundColor = "#AA0039";

		player1Total = 0;
			
		rollDicePlayer1.style.display = "none";
		playAgainPlayer1.style.display = "";
		playAgainPlayer1.style.backgroundColor = "#FFFFFF";
		
	} else {
		if (currentRoll == 1) {
			lossAudio.play();
			scorePlayer2.textContent = `${player2Total} - You lost!`;
			scorePlayer2.style.fontWeight = "bold";
			containerPlayer2.style.backgroundColor = "#AA0039";
			scoreCardPlayer2.style.backgroundColor = "#AA0039";
			gameboardPlayer2.style.backgroundColor = "#AA0039";

			player2Total = 0;
			
			rollDicePlayer2.style.display = "none";
			playAgainPlayer2.style.display = "";
			playAgainPlayer2.style.backgroundColor = "#FFFFFF";

			scorePlayer1.textContent = `${player1Total} - Winner!`;
			winAudio.play();
			scorePlayer1.style.fontWeight = "bold";
			dicePlayer1.style.backgroundColor = "#50C878";
			scoreCardPlayer1.style.backgroundColor = "#50C878";
			gameboardPlayer1.style.backgroundColor = "#50C878";

			player1Total = 0;

			rollPlayer1.style.display = "none";
			rollDicePlayer1.style.display = "none";
			playAgainPlayer1.style.display = "";
			playAgainPlayer1.style.backgroundColor = "#FFFFFF";
		}
	}
});

playAgainPlayer2.addEventListener("click", () => {
	playAgainPlayer2.style.border = "4px solid black";
	if (playAgainPlayer1.style.border == playAgainPlayer2.style.border){
		window.location.reload();
	}
});

