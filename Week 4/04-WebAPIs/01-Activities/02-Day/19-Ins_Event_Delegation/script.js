const listEl = document.querySelector("#grocery-list");
const shoppingCartEl = document.querySelector("#shopping-cart");
const groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];


// Below, the Event Listener is added to the parent element. Therefore all of the child elements will be affected. No matter how many new children are added.
listEl.addEventListener("click", function(event) {  
  event.preventDefault();
  if(event.target.matches("button")) {
    let item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});