# Building a Multi-Section Page.
In this session, we'll extend our previous code structure and develop a multi-section HTML page that simulates the layout of our future Pac-Man game. This guide builds on the foundational work from [HTML basics](), [Semantic markup](), and [Forms]() and leads us toward single-page interface for our game.

## Overview

In this session, we will:
+ Practise creating a multi-section layout with clear, logical content flow.
+ Introducing multiple sections: an **Introduce**, the **Game Area**, and **Instructions**.
+ Enhance the structure for a game interface, keeping in mind the future integration of interactivity (for a Pac-Man game)
+ Continue building on the code structure from ealer sessions.
---

## Step-by-Step Explanation
### 1. Extending the Base Layout
Our starting point is the code from the [last Session](), which includes a header, navigation, a game area section, a scoreboard aside, and a footer. Now, we'll add more sections to enrich the content and better simulate a complete game interface.

### 2. Adding Multiple Sections
we'll introduce three key sectios:
+ **Introduction Section**: Describes the game concept and sets the stage for Pac-Man.
+ **Game Area Section**: The main area where the Pac-Man game will eventually render.
+ **Instructions Section**: Provides guidance on how to play the game (e.g., using arrow keys to move, pausing the game).

### 3. Organizing Content with Flexbox
To maintain a logical layout, we'll use a flex container (with class `.content`) for our multiple sections. 
This container will stack the sections vertically while the scoreboard remains as an aside.

---

## Code Example
Open your favorite code editor or online tool like [CodePen](https://codepen.io/pen/) or [JSFiddle](https://jsfiddle.net/) and try the code below:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pac-Man Game Interface</title>
    <style>
        /* Basic layout styling */
        html, body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        header, footer {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }
        nav {
            background-color: #444;
            padding: 10px;
            text-align: center;
        }
        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        nav li {
            display: inline;
            margin: 0 10px;
        }
        nav a {
            color: #fff;
            text-decoration: none;
        }
        main {
            display: flex;
            flex: 1;
            padding: 20px;
        }

        /* Container for multiple sections in the main content */
        .content {
            flex: 3;
            display: flex;
            flex-direction: column;

        }
        section {
            background-color: #fff;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
        }
        aside#scoreboard {
            flex: 1;
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ccc;
            margin-left: 20px;
        }
        /* Styling the scoreboard for better organization */
        #scoreboard dl {
            display:  flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
        }

        /* Style the term (dt) */
        #scoreboard dt {
            font-weight: bold;
            margin-right: 10px;
        }

        /* style the description (dd) */
        #scoreboard dd {
            margin: 0;
            font-size: 1.2em;
            color: #333;
        }
    </style>
</head>
<body>
    <header role="banner">
        <h1>Pac-Man: A Classic Reimagined</h1>
    </header>
    <nav role="navigation">
        <ul>
            <li><a href="#" id="startGame" aria-label="Start Game">Start</a></li>
            <li><a href="#" id="pauseGame" aria-label="Pause Game">Pause</a></li>
            <li><a href="#" id="restartGame" aria-label="Restart Game">Restart</a></li>
            <li><a href="#" id="settings" aria-label="Game Settings">Settings</a></li>
        </ul>
    </nav>
    <main role="main">
        <div class="content">

            <!-- Introduction Section -->
             <section id="intro">
                <h2>Introduction</h2>
                <p>Welcome to our Pac-Man game interface! Here, you'll experinece a Classic arcade adventure where you guide a Pac-Man through a maze, gobbling up dots and evading ghosts.</p>
             </section>
             <!-- Game Area Section -->
        <section id="gameArea">
            <h2> Game Area</h2>
            <p>This is the space where the Pac-Man game will come to life. In the final version, you'll see the maze, Pac-Man, and the ghosts in action!</p>
        </section>

        <!-- Instruction Section -->
         <section id="instruction">
            <h2>Instruction</h2>
            <p>Control Pac-Man using the arrows keys. Eat all the dots to advance to the next level and avoid the ghosts at all costs. Press "P" to pause the game.</p>
         </section>
    </div>
        <aside id="scoreboard">
            <h2>Scoreboard</h2>
            <p>Time: <span id="gameTimer">00:00</span></p>
            <p>Score: <span id="gameScore">0</span></p>
            <p>Lives: <span id="gameLives">3</span></p>
            <dl>
                <dt>Level:</dt>
                <dd id="gameLevel">1</dd>
            </dl>
        </aside>
    </main>
    <footer role="contentinfo">
        <p>&copy; 2025 My Game</p>
    </footer>
</body>
</html>
```

## Detailed Explanation
### Main Container Structure
+ The `main` element now contains two main parts:
    + A `<div class="content">` that wraps our multi-section content.
    + An `<aside id="scoreboard">` that displays game metrics.
+ The `.content` container uses `Flexbox` in a column direction to stack the sections vertically.

### Sections
+ **Introduction Sections(`#into`)**:
    Provide an overview of the game concept. For Pac-Man, it explains the objective and sets the tone.
+ **Game Area Section*(`#game`)**:
    Reserved for where the actual game rendering will occur. Think of this as your canvas for the maze, Pac-Man, and ghosts.
+ **Instructions Section(`#instructions`):
    Clearly explains the game controls and rules. This helps players know how to interact with your game.
### Scoreboard and `<dl>` Styling:
+ The scoreboard remains on the side to display real-time game stats.
+ The `<dl>` is used effectively to show the "Level" in a clear key-value pair format, styled for visual clarity.
---
## Hands-On Exercises
1. **Customize the introduction**:
   + Edit the introduction text to add more details about the Pac-Man game stroy or background.
   + Try adding an image (e.g., a Pac-Man logo) inside the introduction section.
2. **Enhance the instructions**:
    + Add more detailed instructions for a list of controls using `<ul>` and `<li> ` tags.
    + Example:
    ```html
    <ul>
        <li>Arrow Keys: Move Pac-Man<li>
        <li>P: Pause Game<li>
        <li>Space: Start Game<li>
    </ul>
    ```
3. **Experiment with Layout**:
    + Adjust the CSS in the `.content` container to change the spacing between sections.
    + Try modifying the background color or border styles of each session to differentiate them.
---
## Additional Resources
+ [MDN Web Docs-HTML Sections and Outlines]()
+ [CSS Tricks-A Complete Guide to Flexbox]()
+ [MDN Web Docs-Using ARIA]()

--- 
## Conclusion & Next Steps
This sessions exercise provided a deeper look into organizing a multi-section HTML page, perfectly tailored for our "Awesome Game" project. With a solid, well-structured layout that includes an introduction. we're one step closer to building a dynamic single-page interface. In the next session, we'll move on to refining this layout with Advanced CSS styling and interactivity with Javascript.

Feel free to experiment with the code and make adjustments that suit your vision for the game. Happy coding, and get ready to bring Pac-Man to life!