const gameStage = document.getElementById("gameStage");
const basket = document.getElementById("basket");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("timeLeft");
const bestElement = document.getElementById("bestScore");
const message = document.getElementById("gameMessage");
const status = document.getElementById("gameStatus");

const goodFoods = ["🍎", "🥦", "🥕", "🍌", "🥑", "🍓", "🥗", "🥚"];
const emptyFoods = ["🍩", "🍟", "🍔", "🍭"];
let score = 0;
let timeLeft = 60;
let basketPosition = 50;
let gameRunning = false;
let gameTimer;
let spawnTimer;
let bestScore = Number(localStorage.getItem("nutrilifeBestScore")) || 0;
bestElement.textContent = bestScore;

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function startGame() {
    clearInterval(gameTimer);
    clearInterval(spawnTimer);
    document.querySelectorAll(".falling-food").forEach(food => food.remove());
    score = 0;
    timeLeft = 60;
    basketPosition = 50;
    gameRunning = true;
    updateScore();
    updateBasket();
    message.hidden = true;
    status.textContent = "Catch green foods for +10. Empty calories cost 5.";
    gameStage.focus();
    gameTimer = setInterval(() => {
        timeLeft -= 1;
        timeElement.textContent = timeLeft;
        if (timeLeft <= 0) endGame();
    }, 1000);
    spawnFood();
    spawnTimer = setInterval(spawnFood, 650);
}

function endGame() {
    gameRunning = false;
    clearInterval(gameTimer);
    clearInterval(spawnTimer);
    document.querySelectorAll(".falling-food").forEach(food => food.remove());
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("nutrilifeBestScore", bestScore);
        bestElement.textContent = bestScore;
        status.textContent = "New best score. Nice work!";
    } else {
        status.textContent = `Run complete. You scored ${score} points.`;
    }
    message.hidden = false;
    message.querySelector("h2").textContent = "Time's up";
    message.querySelector("p").textContent = `Final score: ${score}. Ready for another run?`;
    message.querySelector("button").textContent = "Play again";
}

function updateScore() {
    scoreElement.textContent = score;
    timeElement.textContent = timeLeft;
}

function updateBasket() {
    basket.style.left = `${basketPosition}%`;
}

function moveBasket(direction) {
    if (!gameRunning) return;
    basketPosition = Math.max(8, Math.min(92, basketPosition + (direction * 8)));
    updateBasket();
}

function spawnFood() {
    if (!gameRunning) return;
    const isGood = Math.random() > 0.25;
    const food = document.createElement("span");
    food.className = `falling-food ${isGood ? "good" : "empty"}`;
    food.textContent = (isGood ? goodFoods : emptyFoods)[Math.floor(Math.random() * (isGood ? goodFoods.length : emptyFoods.length))];
    food.style.left = `${Math.floor(Math.random() * 88) + 6}%`;
    food.style.animationDuration = `${Math.max(2.2, 4 - (60 - timeLeft) / 25)}s`;
    food.addEventListener("animationend", () => food.remove());
    gameStage.appendChild(food);
    const collisionCheck = setInterval(() => {
        if (!gameRunning || !food.isConnected) {
            clearInterval(collisionCheck);
            return;
        }
        const foodBox = food.getBoundingClientRect();
        const basketBox = basket.getBoundingClientRect();
        if (foodBox.bottom >= basketBox.top && foodBox.left < basketBox.right && foodBox.right > basketBox.left) {
            score += isGood ? 10 : -5;
            score = Math.max(0, score);
            updateScore();
            food.remove();
            clearInterval(collisionCheck);
        }
    }, 50);
}

gameStage.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveBasket(-1);
    }
    if (event.key === "ArrowRight") {
        event.preventDefault();
        moveBasket(1);
    }
    if (event.key === "Enter" && !gameRunning) startGame();
});
