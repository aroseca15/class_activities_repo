# jQuery Calculator

## File

* [`jquery-calculator-starter`](Unsolved/jquery-calculator.html)

## Instructions

* Create the JavaScript logic necessary to add functionality to the jQuery Calculator.

* Your calculator should be able to handle basic mathematical operations like addition, subtraction, multiplication, etc.

* You should be making use of the existing buttons.

* You should be making use of the existing placeholders for entering content (i.e. "firstNumber", "operator", "secondNumber", "result").

* You should have fun and push yourselves! This is a challenge activity—which means, if you get it done, you are a King of jQuery. If you don't, no sweat. The important thing is that you learned at least a FEW things along the way.


## Phases


### Phase I Objectives

Your goals should be to:

Become familiar with the various elements of the HTML page as it is written now. (Identify the classes and IDs that matter!)

Create a general strategy for how you will accomplish the task:

* How will you capture button clicks?
* What will you do with the numbers clicked?
* What will you do when the operator is clicked?
* How will you differentiate numbers from operators?
* How will you know the "value" of a number clicked?
* How will you know when a user is done entering the first number?

Create a few test "on-click" events. These could just trigger Alert messages for now. If you get further along, then have these buttons alert their "value". Remember the jQuery to get the thing clicked on's value:

```javascript
$(this).val()
```

### Phase II Objectives

Your goals should be to:

* Begin creating sets of variables that you think you will need. As a few suggestions: firstNumber, secondNumber, operator, result

* Create an event listener that captures the numbers from button clicks, stores them in a variable, and then displays them on the HTML. 

HINT: Make sure that you are creating a number like '1232', as in, every number clicked should add a digit.

### Phase III Objectives

Your goals should be to:

* Create an event listener that captures an operator button click, checks which operator the user has clicked by checking the buttons value, then saves this operator for later use in a conditional statement.

* Then, modify the event listener for handling number clicks, because once we have an operator, we shouldn't be recording the first number anymore! Once the operator is set, make that listener add to the second number instead. (Example: If a user clicks the "plus" button, you know they are done typing the first number).


### Phase IV Objectives

Your goals should be to:

* Create an event listener to finish the calculation! We need to add a listener to the equals button, so that if the user has entered the first number, the operator, and the second number, math happens. (Example: If a user had clicked the "plus" button, you know you will need to be adding two numbers, because it was stored in the operator variable. If a user clicks the "minus" button, you will need to be subtracting two numbers. Think: if-else statements!)

### Phase V Objectives

Your goals should be to:

* Complete any remaining functionality in your calculator

* Handle bugs and edge cases (Example: What if a user tries to type in more numbers after getting the result? Will that mess up the screen?)

### Phase VI Objectives

Your goals should be to: 

* Create code to "restart" the calculator after a user clicks "clear".