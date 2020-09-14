### URL

A URL for HTTP (or HTTPS) is normally made up of three or four components:

* A scheme. The scheme identifies the protocol to be used to access the resource on the Internet. It can be HTTP (without SSL) or HTTPS (with SSL).
* A host. The host name identifies the host that holds the resource. For example, www.example.com. A server provides services in the name of the host, but hosts and servers do not have a one-to-one mapping. Refer to Host names. Host names can also be followed by a port number. Refer to Port numbers. Well-known port numbers for a service are normally omitted from the URL. Most servers use the well-known port numbers for HTTP and HTTPS , so most HTTP URLs omit the port number.

* A path. The path identifies the specific resource in the host that the web client wants to access. For example, /software/htp/cics/index.html.

* A query string. If a query string is used, it follows the path component, and provides a string of information that the resource can use for some purpose (for example, as parameters for a search or as data to be processed). The query string is usually a string of name and value pairs; for example, term=bluebird. Name and value pairs are separated from each other by an ampersand (&); for example, term=bluebird&source=browser-search.

The components of the URL are combined and delimited as follows:
```
scheme://host:port/path?query
```
* The scheme is followed by a colon and two forward slashes.
* If a port number is specified, that number follows the host name, separated by a colon.
* The path name begins with a single forward slash.
* If a query string is specified, it is preceded by a question mark.

![URL Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/URI_syntax_diagram.svg/1920px-URI_syntax_diagram.svg.png)

##### Sources

[Wikipedia](https://en.wikipedia.org/wiki/URL)
[IBM](https://www.ibm.com/support/knowledgecenter/SSGMCP_5.1.0/com.ibm.cics.ts.internet.doc/topics/dfhtl_uricomp.html)


### AJAX

Ajax is short for Asynchronous JavaScript and XML, which refers to a set of web development techniques rather than an actual programming language. Ajax however, is widely used in client side programming (e.g. JavaScript) to allow for data to be sent and received to and from a database / server. What's special about using Ajax programming is that you can exchange data in the background without actually disturbing the user experience. As Wikipedia puts it,

`By decoupling the data interchange layer from the presentation layer, Ajax allows for web pages, and by extension web applications, to change content dynamically without the need to reload the entire page.`

This method is extremely useful both for website performance and usability. Since asynchronous loading is non-render blocking, it will allow your page's HTML to continue parsing even if it encounters a script tag. From a usability standpoint, visitors can benefit from seeing certain information generated without having to reload the page. This is a huge step forward for improving perceived performance. [1]

However, when we are talking about AJAX for the moment, we are generally speaking of the jQuery method, `.ajax()`;

Link to the documentation: [jQuery.com](https://api.jquery.com/jquery.ajax/)

jQuery's AJAX method allows us to make a request to an external server, and get a response containing data back. We write it as such:

```javascript
$.ajax({
    url: "URL GOES HERE",
    method: "GET"
}).then(function (response) {
    console.log(response)
});
```
There are several key parts here!

First, we use `$.ajax()` method.

Then, we pass the method a single argument, an object with *at least* two properties:
* URL: The location to go talk to!
* method: Something we are ignoring for the moment, so we just put 'GET', which is telling the server we are requesting information. There is also 'POST' and a few others, but we are ignoring them for now.

Next, we append a `.then` because `.ajax` async! We give it a paremeter in the call back.

Lastly inside the callback, we can now use that data we got back, that was stored inside the parameter, named 'response' in the example.

Sources:

[1] [KeyCDN](https://www.keycdn.com/support/ajax-programming)
