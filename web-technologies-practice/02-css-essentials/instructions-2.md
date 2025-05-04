Project Title: Portfolio Webpage Styling
Objective
To demonstrate understanding and mastery of CSS essentials, including the box model, layouts, responsive design, animations/transitions, and modern CSS features (Grid/Flex), by styling a single webpage for a personal portfolio.
Project Description
You will style a pre-existing HTML page for a fictional personal portfolio using CSS only. The webpage includes sections such as Home, About, Projects, and Contact. Your task is to apply CSS to enhance the layout, responsiveness, interactivity, and aesthetics, focusing on the following CSS features:

Box model for consistent spacing and sizing.
Layout techniques using Flexbox and Grid.
Responsive design for various screen sizes.
Animations and transitions for interactive elements.
Modern CSS features to create efficient and flexible layouts.

Requirements
1. Box Model and Layouts

Apply consistent margins, padding, and borders to all sections to demonstrate understanding of the box model.
Use box-sizing: border-box globally to ensure predictable sizing.
Structure the layout with the following:
Header: Fixed or sticky header with a centered logo and navigation.
Main Content: Sections for Home, About, Projects, and Contact, each with distinct padding and margins.
Footer: Bottom-aligned with centered content.


Ensure no content overflows or causes horizontal scrolling.

2. Responsive Design

Use relative units (e.g., rem, vw, %) for font sizes, margins, and padding to ensure scalability.
Implement at least two breakpoints using media queries:
Mobile (<600px): Stack all sections vertically, reduce font sizes, and adjust padding/margins.
Desktop (>1024px): Display content in a multi-column layout where appropriate.


Ensure navigation is usable on mobile (e.g., collapse into a vertical menu or adjust spacing).

3. Animations and Transitions

Add a transition effect to navigation links (e.g., change color or background on hover with a smooth transition of 0.3s).
Create a subtle animation for the Home section (e.g., fade-in effect for the hero text or image using @keyframes).
Apply a hover effect to project cards in the Projects section (e.g., scale up slightly or change border color).
Ensure animations are smooth and do not negatively impact performance.

4. Modern CSS Features (Grid/Flex)

Use Flexbox for:
Centering content in the Home section (e.g., hero text and image).
Aligning navigation items horizontally in the header (with space-between or space-around).


Use CSS Grid for:
The Projects section, creating a responsive grid of project cards (e.g., 1 column on mobile, 2–3 columns on desktop).
Optionally, the About section to align an image and text side by side on larger screens.


Ensure layouts adapt seamlessly across screen sizes using minmax() or auto-fit in Grid where applicable.

Project Structure
Assume the HTML includes:

Header: Contains a logo (<img>) and navigation (<nav> with <a> links).
Main Content:
Home Section: A hero area with a heading, paragraph, and optional image.
About Section: A heading, paragraph, and image.
Projects Section: A heading and a list of project cards (each with an image, title, and description).
Contact Section: A heading and a simple form (name, email, message).


Footer: Contains a paragraph with contact info or social links.

Additional Instructions

Create a single CSS file named styles.css and link it to the HTML.
Use placeholder colors (e.g., named colors like blue, gray) or hex codes; no external libraries or frameworks.
Do not modify the HTML structure; focus solely on CSS.
Ensure the CSS is valid, well-organized, and commented for clarity.
Test the webpage on different screen sizes (use browser developer tools to simulate mobile and desktop views).

Deliverable

A single CSS file named styles.css that meets all the specified requirements.

Notes

The HTML is assumed to be provided; your task is to style it without JavaScript.
This project is designed as a test of your CSS skills; no implementation is provided, only instructions.
After completing the project, verify that all requirements are met to ensure mastery of the specified CSS aspects.
