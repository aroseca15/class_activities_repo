const tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  const tag = document.createElement(tagName);
  tag.textContent = "This was made via prompts. It's a " + tagName;
  document.body.appendChild(tag);
}

const nextTag = confirm("Would you like to add another tag?");

if (nextTag === true) {
  const secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    const secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName;
    document.body.appendChild(secondTag);
  }
}




// Dry Script


// let ask = true;

// while(ask){

//   const tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

//   if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
//     alert("please enter a valid tag");
//   } else {
//     const tag = document.createElement(tagName);
//     tag.textContent = "This was made via prompts. It's a " + tagName;
//     document.body.appendChild(tag);
//   }

//   ask = confirm("Would you like to add another element?");

// }

