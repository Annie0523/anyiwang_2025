---
layout: base
title: Student Home 
description: Home Page
hide: true
image: /images/mario_animation.png
---

# Welcome to Anyi's Website

Here, you'll find a unique me

## Submenu

- [Notebook](navigation/notes.md)
- [About Page](navigation/about.md)
- [School Resource](https://delnorte.powayusd.com/)
- [AP Classroom](https://apstudents.collegeboard.org/)
- [Chat](https://join.slack.com/t/cs-p-hq/shared_invite/zt-2ovqn139v-y1D3J1ljCzKpDj3hpOQifQ)

## Rainbow Animation
Here is a rainbow animation:

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rainbow Square</title>
  <style>
    #rainbow-square {
      width: 100px; /* Size of the square */
      height: 100px;
      background-color: green; /* Initial color */
      animation: rainbow 3s infinite; /* Animation name, duration, and repetition */
    }

/* Define the keyframes for the rainbow animation */
    @keyframes rainbow {
      0% {
        background-color: green; /* Start color */
      }
      50% {
        background-color: blue; /* Mid color */
      }
      100% {
        background-color: green; /* End color */
      }
    }
  </style>

  <div id="rainbow-square"></div>


## JavaScript Calculator

<p>Here is a simple calculator:</p>

<!-- Link to your existing calculator.js -->
<script src="scripts/js-calculator.js"></script>

<!-- Calculator structure -->
<div id="animation">
  <div class="calculator-container">
      <!--result-->
      <div class="calculator-output" id="output">0</div>

      <!--row 1-->
      <div class="calculator-row">
        <div class="calculator-number" onclick="addNumber(1)">1</div>
        <div class="calculator-number" onclick="addNumber(2)">2</div>
        <div class="calculator-number" onclick="addNumber(3)">3</div>
        <div class="calculator-operation" onclick="setOperation('+')">+</div>
      </div>

      <!--row 2-->
      <div class="calculator-row">
        <div class="calculator-number" onclick="addNumber(4)">4</div>
        <div class="calculator-number" onclick="addNumber(5)">5</div>
        <div class="calculator-number" onclick="addNumber(6)">6</div>
        <div class="calculator-operation" onclick="setOperation('-')">-</div>
      </div>

      <!--row 3-->
      <div class="calculator-row">
        <div class="calculator-number" onclick="addNumber(7)">7</div>
        <div class="calculator-number" onclick="addNumber(8)">8</div>
        <div class="calculator-number" onclick="addNumber(9)">9</div>
        <div class="calculator-operation" onclick="setOperation('*')">*</div>
      </div>

      <!--row 4-->
      <div class="calculator-row">
        <div class="calculator-clear" onclick="clearCalculator()">A/C</div>
        <div class="calculator-number" onclick="addNumber(0)">0</div>
        <div class="calculator-number" onclick="addDecimal()">.</div>
        <div class="calculator-equals" onclick="calculateResult()">=</div>
      </div>
  </div>
</div>
<style>
  .calculator-container {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 auto;
  }
  .calculator-row {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
  }
  .calculator-output {
    background-color: #f0f0f0;
    color: black; /* Change text color to black */
    padding: 10px;
    text-align: right;
    font-size: 24px;
  }
  .calculator-number, .calculator-operation, .calculator-clear, .calculator-equals {
    background-color: #f0f0f0;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    color: black; /* Change text color to black */
  }
  .calculator-equals {
    background-color: #4CAF50;
    color: white; /* Keeps the equals button text white for contrast */
  }
  .calculator-clear {
    background-color: #f44336;
    color: white; /* Keeps the clear button text white for contrast */
  }
</style>


  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mario Animation</title>
  <style>
    /* CSS style rules for the sprite */
    .sprite {
      height: 512px; /* Make the sprite larger */
      width: 512px;  /* Make the sprite larger */
      background-image: url('{{sprite_file}}');
      background-repeat: no-repeat;
    }

    /* Ensuring Mario starts at a new position */
    #mario {
      background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}} * -1px);
      position: absolute; /* Ensure Mario's position is absolute */
      top: 100px; /* Adjust starting vertical position */
      left: 100px; /* Adjust starting horizontal position */
    }
  </style>


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

