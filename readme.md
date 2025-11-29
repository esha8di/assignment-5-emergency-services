



## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

## getElementById:  
Returns a single element with the specified  id like document.getElementById("specific id")  
  

  ## getElementsByClassName:  
  Returns live HTMLCollection of elements that have the given class name.  Exp: document.getElementsByClassName("myClass")


## querySelector/querySelectorAll:  
- querySelector returns the first matching element using CSS selector syntax.  
- querySelectorAll returns all matching elements as a static NodeList.  
  


## 2. How to create and insert a new element into the DOM

1. Create a new elemen : newdev
2. Set properties or content

   ## javascript 
   newDiv.innerText = "Hello World";
   newDiv.classList.add("myClass");
   
3. Insert into the DOM:

   ## javascript
   document.body.appendChild(newDiv); // adds at the end of body
   
4. Insert before a specific element:

   ## javascript
   let parent = document.getElementById("parentDiv");
   parent.insertBefore(newDiv);
   

---

## 3. Event Bubbling and How it Works

 Clicking a button inside a div triggers the click event on the button first, then on its parent div, then on its parent body, etc.




## 4. Event Delegation in JavaScript and Its Use


 When a child element triggers the event, the event bubbles up to the parent, where you can handle it.






## 5. Difference between preventDefault() and stopPropagation()
preventDefault()

Stops the browser’s default action for an event.
 

## stopPropagation()

   Stops the event from bubbling up the DOM tree.
 




