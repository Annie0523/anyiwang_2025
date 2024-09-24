---
layout: post
title: About
permalink: /about/
toc: true
comments: true
---
<!-- Main Content -->
<div class="content">
    <p class="medium-text">- My name is Anyi Wang</p>
    <p class="medium-text">- 🏯2007.5.23 born in China → 👨‍👩‍👧‍👦2014.7.14 get a new home member, my brother born → ✈️2022.11 move to the U.S. with my family✈️</p>
    <p class="medium-text">- 🎓I decided to stay here and go to the college, my dream school is Purdue.</p>
    <p class="medium-text">- 👷🏻‍♀️I want to be an engineer in the future.</p>
<!-- Buttons -->
    <button class="btn" onclick="showMyHometown()">Show My Hometown</button>
    <button class="btn" onclick="FavoriteFood()">Favorite Food</button>
    <button class="btn" onclick="MusicTaste()">Music Taste</button>
<!-- Div for dynamic content insertion -->
    <div id="content"></div>
</div>

<!-- JavaScript -->
<script>
    // Function to show hometown details
    function showMyHometown() {
        var contentDiv = document.getElementById('content');

        // Clear previous content
        contentDiv.innerHTML = "";

        // Create and add heading
        var heading = document.createElement('h2');
        heading.textContent = "My Hometown🏠";
        contentDiv.appendChild(heading);

        // Introduction texts
        var introTexts = [
            "I am from Beijing, China.",
            "Beijing, the capital of China, blends ancient traditions with modern advancements. It has been the political, cultural, and historical heart of China for over 800 years.",
            "Known for its majestic palaces, temples, and UNESCO World Heritage Sites like the Forbidden City and the Great Wall, Beijing offers a mix of history and innovation."
        ];
        introTexts.forEach(text => {
            var para = document.createElement('p');
            para.textContent = text;
            para.classList.add('intro-text');
            contentDiv.appendChild(para);
        });

        // Hometown images
        var imageUrls = [
            "https://image.jimcdn.com/app/cms/image/transf/dimension=1280x10000:format=jpg/path/s2217cd0bb1220415/image/i924c52c240be26ee/version/1683854111/the-forbidden-city-beijing.jpg",
            "https://mrm-style.com/en/wp-content/uploads/2023/05/Letters-from-China-Hutongs-the-best-way-to-experience-the-beauty-of-local-life-in-Beijing-Mr.M-by-Marko-Tadic%CC%81-mrmbymarkotadic2.jpg",
            "https://nationalparks-15bc7.kxcdn.com/images/parks/beijing-great-wall/Great%20Wall%20National%20Park%20up%20close.jpg",
            "https://www.ciee.org/sites/default/files/images/2023-06/beijing-downtown-sunny-day-modern-building.jpg",
            "https://images.squarespace-cdn.com/content/v1/5e484"
        ];

        var imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        imageUrls.forEach(url => {
            var img = document.createElement('img');
            img.src = url;
            imageContainer.appendChild(img);
        });
        contentDiv.appendChild(imageContainer);
    }

    // Function to show favorite food details
    function FavoriteFood() {
        var contentDiv = document.getElementById('content');

        // Clear previous content
        contentDiv.innerHTML = "";

        // Create and add heading
        var heading = document.createElement('h2');
        heading.textContent = "My Favorite Food🍜";
        contentDiv.appendChild(heading);

        // Add text and images
        var para = document.createElement('p');
        para.textContent = "I love noodles, especially the hand-pulled noodles my grandmother used to make.";
        para.classList.add('food-text');
        contentDiv.appendChild(para);

        var img = document.createElement('img');
        img.src = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg";
        img.classList.add('food-image');
        contentDiv.appendChild(img);
    }

    // Function to show music taste details
    function MusicTaste() {
        var contentDiv = document.getElementById('content');

        // Clear previous content
        contentDiv.innerHTML = "";

        // Create and add heading
        var heading = document.createElement('h2');
        heading.textContent = "My Music Taste🎶";
        contentDiv.appendChild(heading);

        // Add music description
        var para = document.createElement('p');
        para.textContent = "I enjoy traditional Chinese music, especially the soothing sounds of the guzheng. It reminds me of my childhood in China.";
        para.classList.add('intro-text');
        contentDiv.appendChild(para);

        var img = document.createElement('img');
        img.src = "https://upload.wikimedia.org/wikipedia/commons/5/5b/Guzheng_playing.jpg";
        img.classList.add('food-image');
        contentDiv.appendChild(img);
    }
</script>

<!-- CSS -->
<style>
    .content {
        margin: 0 auto;
        max-width: 800px;
        padding: 20px;
        text-align: left;
    }
    /* Text size classes */
    .small-text { font-size: 12px; }
    .medium-text { font-size: 20px; }
    .large-text { font-size: 24px; }
    .extra-large-text { font-size: 32px; }

    /* Button styling */
    .btn {
        background-color: black;
        color: white;
        border: 1px solid white;
        padding: 10px 20px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        margin: 10px;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }
    .btn:hover {
        background-color: white;
        color: black;
    }

    /* Food and hometown content */
    .food-text, .intro-text {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .food-image {
        height: 300px;
        width: auto;
        display: block;
        margin-bottom: 20px;
    }
    .food-item, .image-container {
        margin-bottom: 30px;
    }
    .image-container {
        display: flex;
        overflow-x: auto;
        white-space: nowrap;
        padding: 10px 0;
    }
    .image-container img {
        height: 200px;
        width: auto;
        margin-right: 10px;
        flex-shrink: 0;
    }
</style>
