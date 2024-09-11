---
layout: page
title: Music
search_exclude: true
permalink: /music/
---
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Size Example</title>
    <style>
        /* Define CSS classes for different text sizes */
        .small-text { font-size: 12px; }
        .medium-text { font-size: 20px; }
        .large-text { font-size: 24px; }
        .extra-large-text { font-size: 32px; }
    </style>
</head>
<body>
    <p class="medium-text">  🎧Music taste is a deeply personal aspect of one's identity, often reflecting emotions, experiences, and cultural background. </p>
    <p class="medium-text">  Some people enjoy the soulful rhythm of jazz or the timeless melodies of classical music, while others are drawn to the energy of rock or the beat of hip-hop. </p>
    <p class="medium-text">  For me, music is not just about the sound—it's about the stories and feelings each song conveys.</p>
    <p class="medium-text">  Here are some artists I appreciate: </p>
</body>

<h3># Artists</h3>
<!-- Artist Namecards -->
<div>
    <button onclick="showSongs('chappellRoan')">Chappell Roan</button>
    <button onclick="showSongs('uim')">UIM</button>
    <button onclick="showSongs('YOASOBI')">YOASOBI</button>
</div>

<!-- Song Lists (Initially Hidden) -->
<div id="chappellRoan" class="song-list" style="display:none;">
    <h2>Chappell Roan's Favorite Playlist</h2>
    <iframe src="https://open.spotify.com/embed/artist/7GlBOeep6PqTfFi59PTUUN?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>

<div id="uim" class="song-list" style="display:none;">
    <h2>UIM's Playlist</h2>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/4ClziihVpBeFXNyDH83Lde?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>

<div id="YOASOBI" class="song-list" style="display:none;">
    <h2>YOASOBI's Playlist</h2>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/64tJ2EAv1R6UaZqc4iOCyj?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>

<script>
function showSongs(artistId) {
    // Get the selected song list
    var songList = document.getElementById(artistId);

    // Check if the song list is currently displayed
    if (songList.style.display === 'none' || songList.style.display === '') {
        // Hide all other song lists
        var songLists = document.getElementsByClassName('song-list');
        for (var i = 0; i < songLists.length; i++) {
            songLists[i].style.display = 'none';
        }
        // Show the selected song list
        songList.style.display = 'block';
    } else {
        // Hide the selected song list
        songList.style.display = 'none';
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

/* Style for artist buttons */
.artist-buttons button {
    margin: 10px;
    padding: 8px 15px; /* Smaller padding for a simpler look */
    font-size: 14px;   /* Slightly smaller font size */
    cursor: pointer;
    border: 1px solid #ccc; /* Add a simple border */
    background-color: #f0f0f0; /* Default button background color */
    color: black; /* Default text color */
    border-radius: 0; /* Remove the rounded corners */
}

/* Style for the song lists */
.song-list {
    margin-top: 20px;
    padding: 10px;
    border-radius: 12px;
    background-color: #333; /* Match the background color with buttons */
    border: none; /* Remove border */
}

.song-list h2, .song-list iframe {
    color: white; /* Ensure text is white */
}
</style>