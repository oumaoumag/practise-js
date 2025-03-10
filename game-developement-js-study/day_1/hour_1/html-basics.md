# HTML BASICS
## Overview
HTML (HyperText Markup Language) is the backbone of everywebpage. It defines the structure of content by using elements (or "tags").In this session you'll learn about the basic structure of an HTML document, common elements, and how to properly nest them.
## Step-by-step Explanation
1. ***Document Structure & Doctype***
+ Every HTML document starts with a declaration that tells the browser which version of HTML you're using. For HTMl5, you start with
```html
<!DOCTYPE html>
```
+ Next, you have the `html` element that wraps all content
```html
<html lang="en">
...
</html>
```
The `lang` attribute helps with accessibility and SEO.

2. ***Head and Body Sections***
+ The `<head>` element contains metadata like the title, character set, and links to stylesheets.
+ The `<body>` element contains the content visible on the page.
3. ***Basic Tags***
+ ***Headings:*** `<h1>` to `<h6>` define headings, with `<h1>` being the most important.
+ ***Paragraphs:*** `<p>` for text content.
+ ***Lists:*** `<ul>` (unordered) or `<ol>` (ordered) with `<li>` for list items.
+ ***Images:*** `<img>` embeds an image;  always include an `alt` attribute.
+ ***Links:*** `<a>` defines hyperlinks

## Interactive Coding Example
Open your favorite code editor (or an online editor like ![CodePen](https://codepen.io/pen/) or ![JSFiddle](https://jsfiddle.net/)) and try the following:

```html
<!DOCTYE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Not First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML Basics</h1>
    <p>This is a paragraph where you introduce your page.</p>

    <h2>My Favourite Things</h2>
    <ul>
        <li>Coding</li>
        <li>Design</li>
        <li>Gaming</li>
    </ul>

    <img src="https://media.istockphoto.com/id/2075908648/photo/engineer-man-hand-type-keyboard-input-configuration-data-ode-for-register-system-structure-or.webp?s=612x612&w=is&k=20&c=H3eN_gF30LRRvD9ex27D0kBRf7mBrzGr1uP9SK0BtwU=" alt="Placeholer image"><br>
    <a href="https://www.example.com">Visit Example.com</a>
</html>
```

## Exercise:
+ Modify the code to add an extra paragraph after the list.
+ Change the heading level of "My Favourite Things" to `<h3>` and observe how to it chnages on the page's hierarchy.

## Resources
+ [MDN Web Docs – HTML Basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)

