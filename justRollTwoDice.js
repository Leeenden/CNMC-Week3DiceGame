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
const dice1 = document.getElementById ("dice1");
const dice2 = document.getElementById ("dice2");
const actionButtons = document.querySelector(".actionButtons");
const rollDice = document.getElementById("rollDice");

rollDice.addEventListener('click', () => {
	let currentRoll1 = Math.ceil(Math.random() * 6);
    let currentRoll2 = Math.ceil(Math.random() * 6);

	roll.style.display = "none";
	dice1.style.display = "";
    dice2.style.display = "";
	rollDice.style.display = "none";
	
	dice1.src = `images/${currentRoll1}Player1.png`;
    dice2.src = `images/${currentRoll2}Player2.png`;

	score.textContent = currentRoll1, currentRoll2;

	roll.style.display = "";
	rollDice.style.display = "";
});