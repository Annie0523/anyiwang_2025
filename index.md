---
layout: base
title: Student Home 
description: Home Page
hide: true
image: /images/mario_animation.png
---
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpage with Decorative Patterns</title>
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
</head>
<body>

    <!-- 左侧花纹 -->
    <div class="left-pattern"></div>

    <!-- 右侧花纹 -->
    <div class="right-pattern"></div>

</body>
# Welcome to Anyi's Website

Here, you'll find a unique me

## Submenu

- [Notebook](_notebooks/Notes/Planning.md)
- [About Page](navigation/about.md)
- [School Resource](https://delnorte.powayusd.com/)
- [AP Classroom](https://apstudents.collegeboard.org/)
- [Chat](https://join.slack.com/t/cs-p-hq/shared_invite/zt-2ovqn139v-y1D3J1ljCzKpDj3hpOQifQ)


<h2>My Notes</h2>
<a href="http://127.0.0.1:4100/Anyi_2025/journey/#"target="_blank">Link to my journey</a>

<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 10;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>

