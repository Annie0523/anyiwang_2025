---
layout: page
title: Game🐍
permalink: /game/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            background-color: black;
            color: white;
            margin: 0;
            padding: 0;
        }
/* 左侧花纹 */
        .left-pattern {
            position: fixed;
            left: 0;
            top: 0;
            width: 200px;
            height: 100%;
            background-image: url('https://cdn.pixabay.com/photo/2022/11/02/22/25/background-7566164_1280.jpg'); /* 替换为你的左侧花纹图片链接 */
            background-repeat: no-repeat;
            background-size: cover;
        }
/* 右侧花纹 */
        .right-pattern {
            position: fixed;
            right: 0;
            top: 0;
            width: 200px;
            height: 100%;
            background-image: url('https://cdn.pixabay.com/photo/2022/11/02/22/25/background-7566164_1280.jpg'); /* 替换为你的右侧花纹图片链接 */
            background-repeat: no-repeat;
            background-size: cover;
        }
/* 内容居中显示 */
        .content {
            margin: 0 auto;
            max-width: 800px;
            padding: 20px;
            text-align: center;
        }
    </style>
<body>

<!-- 左侧花纹 -->
<div class="left-pattern"></div>

<!-- 右侧花纹 -->
<div class="right-pattern"></div>

</body>
<style>
        body {
            text-align: center;
            margin-top: 20px;
            font-family: Arial, sans-serif;
        }
        canvas {
            background-color: #000;
            display: block;
            margin: 0 auto;
        }
        #gameOver {
            display: none;
            font-size: 24px;
            color: red;
        }
        #restartBtn {
            display: none;
            font-size: 18px;
            padding: 10px 20px;
            margin-top: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <p>Use arrow keys to move the snake</p>
    <canvas id="gameCanvas" width="400" height="400"></canvas>
    <p id="gameOver">Game Over!💀</p>
    <button id="restartBtn" onclick="restartGame()">Restart</button>

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
</body>
</html>