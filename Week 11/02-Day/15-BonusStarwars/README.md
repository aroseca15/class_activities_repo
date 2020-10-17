# **Instructions**

* BONUS Time!

* Let's turn our 'show all characters' into a better page.

* What we need to do is:

    * Add a new HTML page, 'all.html'
        * This will show all of our characters.
        * Use 'view.html' as a starting point
        * On it, we will need to make an AJAX call to our 'characters' API
        * Once you have the data back, render a statistics card for every character back!
    * In our server, add a route to show our new 'all.html' page.
    * In the other pages, change the routes in the buttons to go to our new 'all' page!


* ULTRA BONUS

* Let's make this more DRY and organized.

* Move all html files into a new folder called views, and update the routes serving them!

* Test!

* Then, using a bit of elbow grease.... we are going to make the routes leave server.js!
    * We are going to make our routes live in a routes folder!
    * First, create a 'routes' folder at the root level of the application
    * Then, inside the 'routes' folder, create two files, 'apiRoutes.js' and 'htmlRoutes.js'.
    * Inside 'htmlRoutes.js', we are going to:
        * Import path.
        * Then create a module.exports that exports a function that has a single parameter, 'app':

        ```javascript
        module.exports = function (app){



        }
        ```
        * Inside here, we can now place our routes. This is so that when we import this module, we can pass the module app, our express server, and then attach routes to it inside the module!
        * Back in 'server.js', cut the HTML routes out, and place them inside our new htmlRoutes export.
        * Now we need to import these routes back into our server.
        * We can do so by writing:
        ```javascript
        require("./routes/htmlRoutes")(app);
        ```
        * This imports the module, calling it, and passing it app!

    * Now, test!
    * Then, it's time to do the apiRoutes.
    * HINT: It's going to be similar, but we will need to have *two* arguments in our import, and need two parameters in our export! 
    