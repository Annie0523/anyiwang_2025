---
layout: page
title: Notes
permalink: /notes/
---
### Goal 1: Create an interactive website with multiple notebooks
- **Attempt**: Set up Jekyll and learned how to embed notebooks into the structure.
- **Accomplishment**: Successfully linked notebooks and implemented various sections, including a planning document.

### Goal 2: Enhance the website with custom scripts and interactive cells
- **Attempt**: Tried incorporating JavaScript cells in one notebook.
- **Accomplishment**: Implemented a basic JavaScript example and ensured it works within the notebook.

### Goal 3: Share personal experiences and achievements through text and images
- **Attempt**: Uploaded images and linked them with descriptions.
- **Accomplishment**: Created a gallery of personal achievements, focusing on competitions and music.

## Record
<style>
        .content {
            margin: 0 auto;
            max-width: 800px;
            padding: 20px;
            text-align: center;
        }
    </style>

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
    <h2>09/15/2024</h2>
    <p>I did the rainbow and js calculator during weekends and conticue working on it today</p>
    <p>at first I was a little bit confused about the difference between .scss and .css</p>
    <p>Now I figure it out that SCSS is essentially an enhanced version of CSS that allows for more powerful and organized styling capabilities.</p>
    <p>Putting things in the right folder really helps management</p>
    <h2>09/16/2024</h2>
    <p>I added the cookieclicker game to my website</p>
    <p>I found that adding sounds to the game has a really similar process as adding images, and only need to copy the mp3 I downloaded into my folder and code a relative path to it</p>
    <h2>09/17/2024</h2>
    <p>I continue making improvement on the website and try to change its style</p>

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
