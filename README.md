## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById is a DOM Selection method that selects an element by it's unique id. On the other hand getElementByClass is a DOM Selection method that selects all the elements that share a specific class name. The difference between these two is that getElementById looks for one unique id attribute whilst getElementByClass looks for a shared class attribute in all elements.
	querySelector will find and return only the first element on the page that matches my CSS selector. On the other hand querySelectorAll will find and return every element on the page that matches my CSS selector as a NodeList. The key difference here is that querySelector returns an element but querySelectorAll returns a NodeList.
	 

### 2. How do you create and insert a new element into the DOM?

Ans: First you have to create the element by using document.createElement(), after that you have to add content or atrributes like innerText. innerHTML or classList, then you have to insert it by using a method like .appendChild() or .append() to attach to an existing parent element on the page.

### 3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling is a DOM behavior where an event triggered on a specific element (like a click) propagates or spreads through all of it's parent elements climbing upwards the DOM Tree, until it gets to the root. How it wokrs is that if click a child element for example a button, that click will propagate or spread to its parents and it will continue to do so until it reacher the root. It can be stopped using stopPropagation().

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a JS pattern where you can attach a single event listerner to a parent element and it will manage events for all it's children. 
	 It is useful for > 1. Better Performance
					    2. Handles Dynamic Elements
					    3. Cleaner Code

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() stops the browsers in built, default action for an element from happening, like stopping an <a> link from navigating to a new page.
	 stopPropagation() stops the event to "bubbling" up the DOM tree. It prevents parent elements from knowing what happened, meaning their event listeners won't be triggered.


