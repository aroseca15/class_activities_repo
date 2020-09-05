# Setting Attributes

In this activity you are going to use JavaScript to add `hrefs` to `a` tags, `src` to `img` tags, along with some styles all while traversing the DOM.

## Instructions

* In this activity, do NOT edit the .html file.

* Open `index.html` and familiarize yourself with the structure of the HTML.

* Inside of your provided `script.js` complete the following: 

  * Give a `src` and `alt` attribute to the 3 provided `img` tags.

  * Give a `href` attribute to the 3 provided `a` tags.`

  * Add styles via `setAttribute` to make the page look decent. Recommended: margins and padding.

* You will either need nested selectors:

```javascript
const site1El = document.querySelector(".site1");
site1El.querySelector("h4").textContent = "Site 1";
```

* Or .children! 

```javascript
const site1El = document.querySelector(".site1");
site1El.children[0].textContent = "Site 1";
```

## Hint 

* You may need a for loop!


