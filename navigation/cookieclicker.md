---
layout: page
title: CookieClicker
permalink: /cookieclicker/
---
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Clicker</title>
    <style>
        body {
            font-family: 'Comic Sans MS', cursive, sans-serif;
            text-align: center;
            background-color: #000;
            color: #fff;
        }
        #game {
            margin-top: 100px;
        }
        #cookie {
            height: 300px; /* Set the cookie height */
            transition: transform 0.2s;
        }
        #cookie:active {
            transform: scale(0.9); /* Shrink the cookie a little when clicked */
        }
        #cookie.glow {
            animation: glowEffect 0.5s ease-out;
        }
        @keyframes glowEffect {
            0% {
                box-shadow: 0 0 0 0 rgba(255, 255, 0, 0.8); /* 初始小光圈，黄色 */
            }
            100% {
                box-shadow: 0 0 30px 20px rgba(255, 255, 0, 0); /* 扩散到黄色柔光 */
            }
        }
        p {
            font-size: 24px;
            color: yellow;
        }
        .left-pattern, .right-pattern {
            position: fixed;
            top: 0;
            width: 200px;
            height: 100%;
            background-image: url('https://cdn.pixabay.com/photo/2022/11/02/22/25/background-7566164_1280.jpg');
            background-repeat: no-repeat;
            background-size: cover;
        }
        .left-pattern {
            left: 0;
        }
        .right-pattern {
            right: 0;
        }
        .content {
            margin: 0 auto;
            max-width: 800px;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="left-pattern"></div>
    <div class="right-pattern"></div>
    <div id="game">
        <img id="cookie" src="{{site.baseurl}}/images/cookie.png" alt="cookie">
        <p>Cookies: <span id="cookieCount">0</span></p>
    </div>
    <audio id="clickSound" src="{{site.baseurl}}/assets/sound/click.mp3"></audio>
    
<script>
        let cookieCount = 0;
        const cookie = document.getElementById('cookie');
        const cookieCountDisplay = document.getElementById('cookieCount');
        const clickSound = document.getElementById('clickSound');

        cookie.addEventListener('click', () => {
            cookieCount++;
            cookieCountDisplay.textContent = cookieCount;
            clickSound.play();

            // Add glow effect
            cookie.classList.add('glow');
            
            // Remove the glow effect after the animation ends
            setTimeout(() => {
                cookie.classList.remove('glow');
            }, 500);
        });
    </script>
</body>
