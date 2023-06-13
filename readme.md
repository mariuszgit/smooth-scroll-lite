![Smooth Scroll Lite](./img/smooth-scroll-lite.png)

# SmoothScrollLite
A lightweight JavaScript library for smooth scrolling to anchor links.

## Features
- File Size: 465 bytes!!! (minified)
- Pure JS
- No dependencies
- Easy to use

## Installation
You can install SmoothScroll via npm:

```
npm install smooth-scroll-lite
```

## Usage
To use SmoothScrollLite, import it into your JavaScript file:

```
const SmoothScrollLite = require('smooth-scroll-lite');

const smoothScrollLite = new SmoothScrollLite();
```

By default, SmoothScrollLite will look for anchor links with **'href'** attributes starting with **'#'** and apply smooth scrolling behavior to them. Simply add anchor links to your HTML markup with corresponding target sections, and SmoothScroll will take care of the rest.

## Example

```
<a href="#contact-section">Go to contact section</a>
...
<section id="contact-section">...</section>
```
You can also customize the duration of the scrolling animation by passing a value in milliseconds to the constructor:

```
const smoothScrollLite = new SmoothScrollLite(800); // Sets the animation duration to 800 milliseconds
```

That's it! SmoothScroll will automatically add click event listeners to the anchor links and provide a smooth scrolling experience within your web page.

## License
SmoothScroll is released under the MIT License. See [LICENSE](LICENSE) for details.