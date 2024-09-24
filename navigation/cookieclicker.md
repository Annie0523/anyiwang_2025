---
layout: page
title: CookieClicker
permalink: /cookieclicker/
---
<style>
    #game {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 48px;
        color: yellow;
        margin: 0 0 20px 0;
    }

    #cookie {
        height: 300px;
        transition: transform 0.2s;
    }

    #cookie:active {
        transform: scale(0.9);
    }

    #cookie.glow {
        animation: glowEffect 0.5s ease-out;
    }

    @keyframes glowEffect {
        0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 0, 0.8);
        }
        100% {
            box-shadow: 0 0 30px 20px rgba(255, 255, 0, 0);
        }
    }

    p {
        font-size: 24px;
        color: yellow;
        margin-top: 20px;
    }

</style>

<div id="game">
    <h1>Cookie Clicker</h1>
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

        cookie.classList.add('glow');
        
        setTimeout(() => {
            cookie.classList.remove('glow');
        }, 500);
    });
</script>
