# This is a simple and minimalist social links profile.
======================================================  

### Main goals with this project is to make it 
+ *Responsive* 
+ Have a tinge of *interactivity*.


### Tools used
==============
+ HTML
+ CSS
+ JavaScript

### Challenges faced
====================
+ Being unfamilar with targeting elements other than the event target in JS
+ Unfamiliarity with targeted element behaviour in JS

+ Using event.target:

Hovering anchor body: OK (other links fade)

Hovering h4 text: FAIL (both text and anchor body fade)
Failed because event.target returns the h4 element, not the anchor body


### Resolution & Things learned
===============================
+ To target and apply changes to elements other than the event target , I needed to iterate through the array once more inside of the first for of loop.

+ Switching to event.currentTarget:

Fixes issue: always refers to anchor body, not h4 text
Ensures only other anchor bodies fade, not hovered anchor body or its text

*event.target: Returns the actual element that triggered the event.*
*event.currentTarget: Returns the element that the event listener is attached to.*


### Goals achieved
+ Responsiveness - ✔️
+ Interactivity - ✔️