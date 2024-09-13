---
layout: page
title: Journey
permalink: /journey/
---
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
<!-- Journey List -->
<ul class="journey-list">
    <li><a href="#" onclick="showJourney('journey1')">Week 1</a></li>
    <li><a href="#" onclick="showJourney('journey2')">Week 2</a></li>
    <li><a href="#" onclick="showJourney('journey3')">Week 3</a></li>
    <li><a href="#" onclick="showJourney('journey4')">Week 4</a></li>
    <!-- Add more list items for additional dates here -->
</ul>

<!-- Journey Details (Initially Hidden) -->
<div id="journey1" class="journey-detail" style="display:none;">
    <h2>08/29/2024</h2>
    <p>First CSP homework - add a page to personal website Anyi_2025 → Music</p>
    <p>_layouts - create __.html</p>
    <p>navigation - create __.md - add what you want (text, code...)</p>
    <p>_config.yml - add your __.md</p>
</div>

<div id="journey2" class="journey-detail" style="display:none;">
    <h2>09/02/2024</h2>
    <p>Figure out how to change the theme of the web</p>
    <p>index.md - delete # on one theme and add # on the other theme</p>
    <h2>09/04/2024</h2>
    <p>Add a mario png to the first page</p>
    <p>_data - create mario.yml (copy from teacher's link)</p>
    <p>images - create mario.png</p>
    <p>index.md - add mario's code (copy from teacher's link)</p>
    <h2>09/05/2024</h2>
    <p>Add more details to the "About" page</p>
    <p>type stuff in about.md</p>
    <h2>09/05/2024</h2>
    <p>Add more details to the "About" page</p>
    <p>type stuff in about.md</p>
</div>

<div id="journey3" class="journey-detail" style="display:none;">
    <h2>09/10/2024</h2>
    <p>I did more edition on my about page, include text and some images</p>
    <p>The Images I put in didn't go well at first, and all the pictures are really big and full my screen, which made me distressed. I searched up on the website and also the CSP guide and find that we could actually control the size of the images using "style" code</p>
    <p> .medium-text { font-size: 20px; }</p>
    <p>"p class="medium-text">- My name is Anyi Wang/p"</p>
    <p>Additionally, I made the pictures into a gallary similar as the example showed on Mr. Mortensen's website</p>
    <h2>09/11/2024</h2>
    <p>I added side background to my website, making my pages become more colorful</p>
    <h2>09/12/2024</h2>
    <p>I added a snake game page to my website. I got the code from chat-gpt, but it doesn't have a restart button. I worked out a restart button by myself, with the help on google</p>
    <p>The game is still not complete: snake moves so fast that I'm hard to control the direction</p>

</div>

<div id="journey4" class="journey-detail" style="display:none;">
    
</div>

<script>
function showJourney(journeyId) {
    var journeyDetails = document.getElementsByClassName('journey-detail');
    for (var i = 0; i < journeyDetails.length; i++) {
        journeyDetails[i].style.display = 'none';
    }
    var selectedJourney = document.getElementById(journeyId);
    if (selectedJourney.style.display === 'none' || selectedJourney.style.display === '') {
        selectedJourney.style.display = 'block';
    } else {
        selectedJourney.style.display = 'none';
    }
}
</script>

<style>
/* Ensure the body background is black */
body {
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

/* Style for the journey list */
.journey-list {
    list-style-type: none; /* Remove default bullet points */
    padding: 0;
    margin: 0;
}

.journey-list li {
    margin: 10px 0;
}

.journey-list a {
    color: white; /* Text color for links */
    text-decoration: none; /* Remove underline from links */
    font-size: 16px;
    cursor: pointer;
}

/* Style for the journey details */
.journey-detail {
    margin-top: 20px;
    padding: 10px;
    border-radius: 12px;
    background-color: transparent; /* Remove white background */
    border: none; /* Remove border */
}

.journey-detail h2, .journey-detail p {
    color: white; /* Ensure text is white */
}
</style>
