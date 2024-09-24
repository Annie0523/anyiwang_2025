---
layout: page
title: Game🐍
permalink: /game/
---
<!-- Left Pattern -->
<div class="left-pattern"></div>

<!-- Right Pattern -->
<div class="right-pattern"></div>

<!-- Main Content Area -->
<main class="page-content" aria-label="Content">
    <div class="wrapper">
        {{ content }}
    </div>
</main>

<!-- Snake Game Section -->
<p>Use arrow keys to move the snake</p>
<canvas id="gameCanvas" width="400" height="400"></canvas>
<p id="gameOver">Game Over!💀</p>
<button id="restartBtn" onclick="restartGame()">Restart</button>

<!-- Snake Game Script -->
<script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const gridSize = 20;
    const tileCount = canvas.width / gridSize;
    let snake = [{x: 10, y: 10}];
    let food = {x: 5, y: 5};
    let dx = 0;
    let dy = 0;
    let gameOver = false;

    // Generate random food position
    function generateFood() {
        food.x = Math.floor(Math.random() * tileCount);
        food.y = Math.floor(Math.random() * tileCount);
    }

    // Draw the snake
    function drawSnake() {
        ctx.fillStyle = "lime";
        snake.forEach(segment => {
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        });
    }

    // Draw the food
    function drawFood() {
        ctx.fillStyle = "red";
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    }

    // Move the snake
    function moveSnake() {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);

        // Check if the snake eats the food
        if (head.x === food.x && head.y === food.y) {
            generateFood();
        } else {
            snake.pop();
        }
    }

    // Check if game is over
    function checkGameOver() {
        const head = snake[0];

        // Hit the wall
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            return true;
        }

        // Hit itself
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }

        return false;
    }

    // Update the game state
    function update() {
        if (gameOver) {
            document.getElementById("gameOver").style.display = "block";
            document.getElementById("restartBtn").style.display = "inline-block";
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSnake();
        drawFood();
        moveSnake();

        if (checkGameOver()) {
            gameOver = true;
        }
    }

    // Control snake movement
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp" && dy === 0) {
            dx = 0;
            dy = -1;
        } else if (event.key === "ArrowDown" && dy === 0) {
            dx = 0;
            dy = 1;
        } else if (event.key === "ArrowLeft" && dx === 0) {
            dx = -1;
            dy = 0;
        } else if (event.key === "ArrowRight" && dx === 0) {
            dx = 1;
            dy = 0;
        }
    });

    // Restart the game
    function restartGame() {
        snake = [{x: 10, y: 10}];
        dx = 0;
        dy = 0;
        generateFood();
        gameOver = false;
        document.getElementById("gameOver").style.display = "none";
        document.getElementById("restartBtn").style.display = "none";
    }

    // Run the game loop
    setInterval(update, 100);
</script>
