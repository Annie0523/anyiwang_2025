---
layout: post
title: About
permalink: /about/
toc: true
comments: true
---
<style>
    .content {
        margin: 0 auto;
        max-width: 800px;
        padding: 20px;
        text-align: center;
    }
    .small-text { font-size: 12px; }
    .medium-text { font-size: 20px; }
    .large-text { font-size: 24px; }
    .extra-large-text { font-size: 32px; }
    .btn {
        background-color: black;
        color: white;
        border: none;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
    .food-text {
        font-size: 18px;
        margin-bottom: 10px;
    }
    .food-image {
        height: 300px;
        width: auto;
        display: block;
        margin-bottom: 20px;
    }
    .food-item {
        margin-bottom: 30px;
    }
    .image-container {
        display: flex;
        overflow-x: auto;
        white-space: nowrap;
        padding: 10px 0;
        width: 100%;
    }
    .image-container img {
        height: 200px;
        width: auto;
        margin-right: 10px;
        flex-shrink: 0;
    }
</style>

<div class="left-pattern"></div>
<div class="right-pattern"></div>

<p class="medium-text">- My name is Anyi Wang</p>
<p class="medium-text">- 🏯2007.5.23 born in China → 👨‍👩‍👧‍👦2014.7.14 get a new home member, my brother born → ✈️2022.11 move to the U.S. with my family✈️</p>
<p class="medium-text">- 🎓I decided to stay here and go to the college, my dream school is Purdue.</p>
<p class="medium-text">- 👷🏻‍♀️I want to be an engineer in the future.</p>

<!-- Buttons -->
<button class="btn" onclick="showMyHometown()">Show My Hometown</button>
<button class="btn" onclick="FavoriteFood()">Favorite Food</button>
<button class="btn" onclick="MusicTaste()">Music Taste</button>

<!-- Div where new content (images and text) will be inserted -->
<div id="content"></div>

<script>
    function MusicTaste() {
        window.location.href = "http://127.0.0.1:4100/anyiwang_2025/music/";
    }

    function showMyHometown() {
        var contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ""; // Clear previous content

        var heading = document.createElement('h2');
        heading.textContent = "My Hometown🏠";

        var introText1 = document.createElement('p');
        introText1.textContent = "I am from Beijing, China.";
        introText1.style.fontSize = "20px";

        var introText2 = document.createElement('p');
        introText2.textContent = "Beijing, the capital of China, is a city that blends ancient traditions with modern advancements. It has been the political, cultural, and historical heart of China for over 800 years. Known for its majestic palaces, temples, and ancient architecture, the city is home to UNESCO World Heritage Sites such as the Forbidden City, the Temple of Heaven, and the Great Wall nearby.";
        introText2.style.fontSize = "20px";

        var introText3 = document.createElement('p');
        introText3.textContent = "Modern Beijing is a global metropolis, hosting numerous skyscrapers, world-class restaurants, and a thriving technology industry. It also holds cultural significance as a hub of arts, education, and traditional Chinese customs, making it a city where history and innovation coexist in harmony.";
        introText3.style.fontSize = "20px";

        var imageUrls = [
            "https://image.jimcdn.com/app/cms/image/transf/dimension=1280x10000:format=jpg/path/s2217cd0bb1220415/image/i924c52c240be26ee/version/1683854111/the-forbidden-city-beijing.jpg",
            "https://mrm-style.com/en/wp-content/uploads/2023/05/Letters-from-China-Hutongs-the-best-way-to-experience-the-beauty-of-local-life-in-Beijing-Mr.M-by-Marko-Tadic%CC%81-mrmbymarkotadic2.jpg",
            "https://nationalparks-15bc7.kxcdn.com/images/parks/beijing-great-wall/Great%20Wall%20National%20Park%20up%20close.jpg",
            "https://www.ciee.org/sites/default/files/images/2023-06/beijing-downtown-sunny-day-modern-building.jpg",
            "https://images.squarespace-cdn.com/content/v1/5e484ab628c78d6f7e602d73/1621202167228-KH9YNOEGFEIWQICRGHEN/Beijing-Street-food-Tanghulu-min.png"
        ];

        var imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        imageUrls.forEach(url => {
            var img = document.createElement('img');
            img.src = url;
            imageContainer.appendChild(img);
        });

        contentDiv.appendChild(heading);
        contentDiv.appendChild(introText1);
        contentDiv.appendChild(introText2);
        contentDiv.appendChild(introText3);
        contentDiv.appendChild(imageContainer);
    }

    function FavoriteFood() {
        var contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ""; // Clear previous content

        var heading = document.createElement('h2');
        heading.textContent = "Foods I Like🤩";

        var foodItems = [
            {
                text: "🍖Korean BBQ offers a smoky, savory flavor that pairs well with grilled meats and tangy sauces, creating a satisfying dining experience.",
                imgSrc: "https://6amcity.brightspotcdn.com/dims4/default/f6a7eca/2147483647/strip/true/crop/4032x2270+0+377/resize/2000x1126!/format/webp/quality/90/?url=https%3A%2F%2Fk1-prod-sixam-city.s3.us-east-2.amazonaws.com%2Fbrightspot%2F1f%2F1d%2F09867092497398a268e5fc3a8402%2Fyakiniqkbbq.JPG"
            },
            {
                text: "🍣Sushi brings a fresh and delicate balance of fish, rice, and vegetables, offering a light yet flavorful bite.",
                imgSrc: "https://storage.googleapis.com/sushisan2022_bucket/wp-content/uploads/40dd2191-sushisan_san-sets_megatron_placement_2.jpg"
            },
            {
                text: "🍝Spaghetti, with its tender pasta and rich sauces, provides a comforting, hearty meal full of familiar Italian flavors.",
                imgSrc: "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-6.jpg"
            },
            {
                text: "🍨Ice cream, creamy and sweet, delivers a refreshing and indulgent finish, perfect for satisfying dessert cravings.",
                imgSrc: "https://glutenfreecuppatea.co.uk/wp-content/uploads/2021/06/gluten-free-oreo-ice-cream-recipe-5.jpg"
            }
        ];

        foodItems.forEach(item => {
            var container = document.createElement('div');
            container.classList.add('food-item');

            var introText = document.createElement('p');
            introText.textContent = item.text;
            introText.classList.add('food-text');

            var image = document.createElement('img');
            image.src = item.imgSrc;
            image.classList.add('food-image');

            container.appendChild(introText);
            container.appendChild(image);
            contentDiv.appendChild(container);
        });

        contentDiv.insertBefore(heading, contentDiv.firstChild);
    }
</script>
