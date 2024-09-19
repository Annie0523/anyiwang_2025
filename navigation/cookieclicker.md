---
layout: page
title: Cookieclicker
permalink: /game/
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Clicker Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
        }

        #game {
            margin-top: 50px;
        }

        #cookie {
            cursor: pointer;
        }

        #shop {
            margin-top: 30px;
        }

        button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Cookie Clicker Game</h1>
    <div id="game">
        <!-- Cookie image -->
        <img id="cookie" src="images/cookie.png" alt="Cookie" width="200">
        <!-- Display number of cookies -->
        <p>Cookies: <span id="cookieCount">0</span></p>
    </div>
    
    <div id="shop">
        <h2>Shop</h2>
        <!-- Button to buy workers -->
        <button id="buyWorker">Buy Worker (Cost: 10 cookies)</button>
        <!-- Display number of workers -->
        <p>Workers: <span id="workerCount">0</span></p>
    </div>

    <!-- Sound for clicking the cookie -->
    <audio id="clickSound" src="/assets/sounds/click.mp3"></audio>

    <script>
        // Variables to track cookie count and worker count
        let cookieCount = 0;
        let workerCount = 0;
        let workerCost = 10;
        let cookiesPerSecond = 0;

        // Get DOM elements for displaying data and interacting with the game
        const cookie = document.getElementById('cookie');
        const cookieCountDisplay = document.getElementById('cookieCount');
        const workerCountDisplay = document.getElementById('workerCount');
        const buyWorkerButton = document.getElementById('buyWorker');
        const clickSound = document.getElementById('clickSound');

        // Event listener for clicking the cookie
        cookie.addEventListener('click', () => {
            cookieCount++;  // Increment cookie count
            cookieCountDisplay.textContent = cookieCount;  // Update display
            clickSound.play();  // Play click sound
        });

        // Event listener for buying a worker
        buyWorkerButton.addEventListener('click', () => {
            if (cookieCount >= workerCost) {
                workerCount++;  // Increment worker count
                cookieCount -= workerCost;  // Deduct cookies for buying a worker
                workerCost = Math.floor(workerCost * 1.5);  // Increase worker cost for next purchase
                workerCountDisplay.textContent = workerCount;  // Update worker count display
                buyWorkerButton.textContent = `Buy Worker (Cost: ${workerCost} cookies)`;  // Update button text

                // Increase passive cookie generation
                cookiesPerSecond += 1;
            }
        });

        // Passive cookie generation every second
        setInterval(() => {
            cookieCount += cookiesPerSecond;  // Add passive cookies
            cookieCountDisplay.textContent = cookieCount;  // Update cookie count display
        }, 1000);
    </script>
</body>
</html>