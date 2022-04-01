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

rollDice.addEventListener('click', () => {
	let currentRoll = Math.ceil(Math.random() * 6);

	roll.style.display = "none";
	dice.style.display = "";
	rollDice.style.display = "none";
	
	dice.src = `images/${currentRoll}Player1.png`;

	score.textContent = currentRoll;

	roll.style.display = "";
	rollDice.style.display = "";
});
