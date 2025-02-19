### **Background**  

Tetris is a classic falling-block puzzle game where players manipulate geometric shapes called Tetriminos to form complete horizontal lines. Completed lines disappear, increasing the player's score. The game continues until the playing field fills up, resulting in a game-over scenario.  

This project aims to **build Tetris from scratch using only HTML, CSS, and JavaScript** (without external libraries or frameworks) to enhance understanding of **game loops, rendering, event handling, and performance optimization**.  

The design will focus on:  
- Achieving **smooth 60 FPS animations** using `requestAnimationFrame()`.  
- Implementing **fluid keyboard controls** without jank or stutter.  
- Building **a simple game engine** using DOM elements instead of `<canvas>`.  
- Creating **a maintainable code structure** with modular design patterns.  
- Optimizing performance using **JavaScript profiling tools**.  

Great! Now, let's define the **Requirements** using the MoSCoW prioritization method (Must-have, Should-have, Could-have, and Won't-have). This ensures we focus on core functionalities first while keeping room for enhancements later.  

### **Requirements**  

#### **Must-Have (M)**  
- **Game Loop**: Runs consistently at **60 FPS** using `requestAnimationFrame()`.  
- **Rendering Without Canvas**: Uses **HTML and CSS for game elements** instead of `<canvas>`.  
- **Tetrimino Movement**:  
  - Pieces **fall automatically** over time.  
  - Player can **move left, right, and rotate** using keyboard input.  
  - **Soft drop** (faster fall) and **hard drop** (instant placement) are supported.  
- **Collision Detection**: Prevents Tetriminos from overlapping or going out of bounds.  
- **Line Clearing Mechanic**: Removes **full horizontal lines** and increases score.  
- **Game Over Condition**: Occurs when new pieces **cannot spawn** due to lack of space.  
- **Basic Score System**:  
  - Award points for **clearing lines**.  
  - Show current score and level.  
- **Pause Menu**: Allows **pausing, resuming, and restarting** the game.  
- **Smooth Keyboard Controls**: Holding down a key moves the piece continuously.  

#### **Should-Have (S)**  
- **Tetromino Preview**: Displays **next upcoming piece**.  
- **Hold Mechanic**: Allows storing **one piece** to use later.  
- **Ghost Piece**: Shows **where the piece will land** before dropping.  
- **Dynamic Difficulty**: Speed increases **as the player progresses**.  
- **Basic Animations**: Smooth **transitions** for falling pieces and line clears.  

#### **Could-Have (C)**  
- **Custom Themes & Skins**: Change **colors and styles** dynamically.  
- **Advanced Score System**: Includes **combo multipliers** and rewards.  
- **Sound Effects & Music**: Play sounds for **movement, rotation, and clearing lines**.  
- **Leaderboard**: Track high scores **locally using `localStorage`**.  
- **Achievements**: Award badges for milestones like **clearing multiple lines at once**.  

#### **Won’t-Have (W) for MVP**  
- Multiplayer mode.  
- AI opponent or advanced physics.  
- 3D or complex visual effects.  

