
# Project Title: Social Media Dashboard

## Objective
To demonstrate a comprehensive understanding of Web 2.0 development by creating an interactive social media dashboard webpage that integrates core client-side technologies (HTML, CSS, JavaScript), simulates server-side interactions, and incorporates key Web 2.0 concepts such as user-generated content, social interaction, and asynchronous communication.

## Project Description
You will create a single-page social media dashboard that allows users to post updates, view a feed of posts, and interact with content. The project will use HTML for structure, CSS for styling, and JavaScript for interactivity, with simulated server-side interactions to mimic a real Web 2.0 application. The dashboard will emphasize user-generated content, social features, and a responsive, dynamic user experience, aligning with Web 2.0 principles.

## Requirements

### I. Core Client-Side Technologies

#### 1. HTML
- **Semantic Structure**: Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) to structure the dashboard, including:
  - A header with a title and navigation.
  - A main section with a post input form and a feed of posts.
  - An aside for user profile information.
  - A footer with app information.
- **Forms**: Create a form for posting updates with:
  - A text input for the post content (required, max 280 characters).
  - A file input for optional image uploads (accept only images).
  - A submit button.
  - Proper `<label>` elements for accessibility.
- **Common Elements**: Include headings, paragraphs, lists (for navigation), links, and images (e.g., user avatars, post images).
- **Accessibility**: Ensure images have descriptive `alt` text, form inputs are labeled, and the structure supports screen readers (e.g., use ARIA attributes like `aria-labelledby` where beneficial).

#### 2. CSS
- **Box Model**: Apply consistent margins, padding, and borders to all sections, using `box-sizing: border-box` globally.
- **Styling**: Style the dashboard with:
  - A color scheme and typography (use web-safe fonts or Google Fonts).
  - External stylesheet (`styles.css`) linked to the HTML.
- **Layouts**: Use Flexbox for:
  - Centering the post form and aligning navigation items horizontally.
  - Arranging the main content and aside in a row on desktop.
  - Use CSS Grid for the post feed, displaying posts in a responsive grid (1 column on mobile, 2–3 columns on desktop).
- **Responsive Design**: Implement media queries for:
  - Mobile (<600px): Stack sections vertically, reduce font sizes, and adjust padding.
  - Desktop (>1024px): Display main content and aside side by side.
- **CSS3 Features**: Add transitions (e.g., hover effects on buttons, 0.3s color change) and a fade-in animation for new posts using `@keyframes`.
- **Selectors**: Use element, class, ID, and pseudo-classes (e.g., `:hover`, `:focus`) to style components.

#### 3. JavaScript
- **Language Fundamentals**:
  - Store posts in an array of objects with properties: `id`, `content`, `image` (optional), `user`, `timestamp`, `likes`.
  - Use functions to add posts, like posts, and delete posts, with validation (e.g., non-empty content).
  - Implement control structures for looping through posts and handling conditions.
- **DOM Manipulation**:
  - Dynamically render the post feed in a `<div>` or `<ul>` by creating `<article>` elements for each post, including content, image (if present), user info, timestamp, and like button.
  - Update the DOM when posts are added, liked, or deleted.
  - Clear the form after submission.
- **Event Handling**:
  - Add event listeners for:
    - Form submission to add a new post (`event.preventDefault()`).
    - Click on like buttons to increment the like count.
    - Click on delete buttons (visible only to the post’s user) to remove posts.
  - Use event delegation for dynamically added posts.
- **Asynchronous JavaScript**:
  - Simulate server communication using `fetch` with a mock API (e.g., `jsonplaceholder.typicode.com` or a local JSON object with `setTimeout` for 1-second delay).
  - Use `async`/`await` to handle adding and deleting posts, returning JSON data.
  - Display a loading message during async operations and handle errors (e.g., show an alert for failed requests).
  - Parse and display JSON data in the feed.

### II. Core Server-Side Technologies (Simulated)
- **Dynamic Behavior**: Simulate server-side processing by:
  - Using a mock API or local JSON to store/retrieve posts.
  - Implementing a function to generate unique `id` values for posts (e.g., timestamp-based).
- **Database Simulation**: Treat the post array as a simple in-memory database, supporting CRUD operations (Create: add post, Read: display posts, Update: like post, Delete: remove post).
- **API Simulation**: Structure the mock API to mimic a RESTful interface:
  - `POST /posts`: Add a new post.
  - `GET /posts`: Retrieve all posts.
  - `DELETE /posts/:id`: Delete a post.
  - Return JSON responses with status codes (e.g., 200 for success, 400 for errors).
- **Web Server Role**: Note in comments that a real server (e.g., Node.js, Apache) would handle these requests in production.

### III. Web 2.0 Concepts and Architectural Patterns
- **Client-Server Architecture**:
  - Simulate HTTP requests (GET, POST, DELETE) using `fetch` to demonstrate client-server communication.
  - Ensure the client (browser) sends requests and processes server responses.
- **User-Generated Content**:
  - Allow users to create posts with text and images, stored and displayed in the feed.
  - Display user information (e.g., username, avatar) with each post.
- **Social Interaction**:
  - Implement a like button for each post, updating the like count in real-time.
  - Optionally, add a comment input field (simulated, not persisted) to demonstrate interaction.
- **Rich Internet Application (RIA)**:
  - Create a dynamic, responsive UI that updates without full page reloads, using AJAX for post operations.
- **Single-Page Application (SPA) Characteristics**:
  - Load the dashboard once and update the feed dynamically via JavaScript and API calls.
  - Ensure smooth transitions and minimal UI flicker during updates.

## Project Structure
- **HTML (`index.html`)**:
  - Header: Title, navigation (`<nav>` with links to sections).
  - Main: Form for posting, feed of posts, status message area.
  - Aside: User profile (username, avatar, bio).
  - Footer: App info or links.
- **CSS (`styles.css`)**: External stylesheet for styling and layout.
- **JavaScript (`script.js`)**: Handles interactivity, DOM updates, and async operations.

## Additional Instructions
- Use vanilla HTML, CSS, and JavaScript; no frameworks or libraries.
- Link `styles.css` and `script.js` to `index.html`.
- Initialize the feed with 2–3 sample posts (stored in the JavaScript array).
- Use placeholder images (e.g., `https://via.placeholder.com/150`) and text (e.g., lorem ipsum) where needed.
- Simulate file uploads by capturing the file input’s name or type (no actual upload required).
- Ensure code is well-commented, explaining client-side and simulated server-side logic.
- Test the application for:
  - Form submission and feed updates.
  - Responsive design across mobile and desktop.
  - Async operations (loading, error handling).
  - Accessibility (keyboard navigation, screen reader compatibility).

## Deliverables
- Three files:
  - `index.html`: Structured webpage.
  - `styles.css`: Styling and layout.
  - `script.js`: Interactivity and logic.

## Notes
- This project tests your ability to integrate Web 2.0 technologies and concepts.
- No server-side implementation is required; simulate server interactions with JavaScript.
- After completion, verify all requirements are met to ensure mastery of Web 2.0 development principles.
- Reflect on how the project demonstrates the shift from static Web 1.0 to dynamic, user-centric Web 2.0.
