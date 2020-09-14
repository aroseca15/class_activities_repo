## jQuery

jQuery is a JavaScript library that simplifies DOM manipulation and event handling. It allows us to write fewer lines of code than we'd need to if we were using plain ol' JavaScript to accomplish the same end. jQuery also provides a number of methods for animations and working with APIs.

### Set up

Grab a jQuery script link, and drop it in your body!

Once you've done that, the only thing we need to use is....

$ (which is just an alias for `jQuery`)

### Selectors

```javascript
let allDivs = $("div");
let byClass = $(".container");
let thisOne = $("#thisOne");
```

We can pass similar-to-CSS selectors to the jQuery `$`. The most important ones, id, tag, and class work identically to the CSS Selectors, but there are plenty more

[jQuery Selectors](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)

### Creating an Element

```javascript
let div = $("<div>");
let img = $("<img src='...'>");
```

If you give the `$` factory a complete element, with tags, however, it instead creates the element!

### Methods

Once we have either selected or created an element, it's time to talk methods!

Note: ONLY METHODS! jQuery hates properties. Everything is a method in jQuery;

The key ones are:
| method | What it does |
| ------ | ------|
|.html() | Get or set the HTML contents.|
|.text() | Get or set the text contents; HTML will be stripped.|
|.attr() | Get or set the value of the provided attribute.
|.width() | Get or set the width in pixels of the first element in the selection as an integer.|
|.height() | Get or set the height in pixels of the first element in the selection as an integer.|
|.position() | Get an object with position information for the first element in the selection, relative to its first positioned ancestor. This is a getter only.|
|.val() | Get or set the value of form elements.|

Also, if you try to run one of these methods after using a selector that finds *many* elements, these will only get/set the *first* element found.

If you want to get/set *many things*, we need to use *each*

#### Data
There's often data about an element you want to store with the element. In plain JavaScript, you might do this by adding a property to the DOM element. jQuery offers a straightforward way to store data related to an element.

```javascript
// Storing and retrieving data related to an element.
 
$( "#myDiv" ).data( "keyName", { foo: "bar" } );
 
$( "#myDiv" ).data( "keyName" ); // Returns { foo: "bar" }
```
Any kind of data can be stored on an element. For the purposes of this article, .data() will be used to store references to other elements.

For example, you may want to establish a relationship between a list item and a <div> that's inside of it. This relationship could be established every single time the list item is touched, but a better solution would be to establish the relationship once, then store a pointer to the <div> on the list item using .data():

```javascript
// Storing a relationship between elements using .data()
 
$( "#myList li" ).each(function() {
 
    let li = $( this );
    let div = li.find( "div.content" );
 
    li.data( "contentDiv", div );
 
});
 
// Later, we don't have to find the div again;
// we can just read it from the list item's data
let firstLi = $( "#myList li:first" );
 
firstLi.data( "contentDiv" ).html( "new content" );
```
In addition to passing .data() a single key-value pair to store data, you can also pass an object containing one or more pairs.


#### On
The on() method attaches one or more event handlers for the selected elements and child elements.
```javascript
$("p").on("click", function(){
  alert("The paragraph was clicked.");
});
```
Just like in the WebAPI, we give it two arguments: The event, and then the function to execute.


### Each

Our new best friend. Two of them!

#### $.each()
$.each() is a generic iterator function for looping over object, arrays, and array-like objects. Plain objects are iterated via their named properties while arrays and array-like objects are iterated via their indices.

$.each() is essentially a drop-in replacement of a traditional for or for-in loop. Given:

```javascript
let sum = 0;
 
let arr = [ 1, 2, 3, 4, 5 ];
```

```javascript
for ( let i = 0, l = arr.length; i < l; i++ ) {
    sum += arr[ i ];
}
 
console.log( sum ); // 15
```
Can be replaced with this:

```javascript
$.each( arr, function( index, value ){
    sum += value;
});
 
console.log( sum ); // 15
```
Notice that we don't have to access arr[ index ] as the value is conveniently passed to the callback in $.each().

In addition, given:

```javascript
let sum = 0;
let obj = {
    foo: 1,
    bar: 2
}
```
Then this:

```javascript
for (let item in obj) {
    sum += obj[ item ];
}
 
console.log( sum ); // 3
```

Can be replaced with this:

```javascript
$.each( obj, function( key, value ) {
    sum += value;
});
 
console.log( sum ); // 3
```
Again, we don't have to directly access obj[ key ] as the value is passed directly to the callback.

Note that $.each() is for plain objects, arrays, array-like objects that are not jQuery collections.

This would be considered incorrect:

```javascript
// Incorrect:
$.each( $( "p" ), function() {
    // Do something
});
For jQuery collections, use .each().
```

#### .each()
.each() is used directly on a jQuery collection. It iterates over each matched element in the collection and performs a callback on that object. The index of the current element within the collection is passed as an argument to the callback. The value (the DOM element in this case) is also passed, but the callback is fired within the context of the current matched element so the this keyword points to the current element as expected in other jQuery callbacks.

For example, given the following markup:

```HTML
<ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
</ul>
```
.each() may be used like so:

```javascript
$( "li" ).each( function( index, element ){
    console.log( $( this ).text() );
});
 
// Logs the following:
// Link 1
// Link 2
// Link 3
```


* [jQuery Manipulation](https://learn.jquery.com/using-jquery-core/manipulating-elements/)


### Useful Links:
* [MDN: jQuery](https://developer.mozilla.org/en-US/docs/Glossary/jQuery)
* [Wikipedia: jQuery](https://en.wikipedia.org/wiki/JQuery)
* [jQuery Official Website](https://jquery.com/)
* [jQuery Full Cheat Sheet](https://www.shortcutfoo.com/app/dojos/jquery/cheatsheet)