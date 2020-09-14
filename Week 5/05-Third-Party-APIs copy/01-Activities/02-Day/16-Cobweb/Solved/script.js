// Here we are given a cob-web of items. Let"s dig in and grab the items we need.
let theCobWeb = {
    biggestWeb: {
        item: "comb",
        biggerWeb: {
            items: ["glasses", "paperclip", "bubblegum"],
            smallerWeb: {
                item: "toothbrush",
                tinyWeb: {
                    items: ["toenails", "lint", "wrapper", "homework"]
                }
            }
        },
        otherBigWeb: {
            item: "headphones"
        }
    }
};

// Create the code necessary to print each of the following lines using the object above:
// "I found my glasses!"
// "I found my toothbrush!"
// "I found my headphones!"
// "I found my homework!"
console.log("I found my " + theCobWeb.biggestWeb.biggerWeb.items[0] + "!");
console.log("I found my " + theCobWeb.biggestWeb.biggerWeb.smallerWeb.item + "!");
console.log("I found my " + theCobWeb.biggestWeb.otherBigWeb.item + "!");
console.log("I found my " + theCobWeb.biggestWeb.biggerWeb.smallerWeb.tinyWeb.items[3] + "!");

// Bonus (Extra Hard): It"s impossible to complete this in the allotted time. Take this home as a challenge and bring it back to your TA/Instructor for the solution.
// Create a function using JavaScript (NOT jQuery) for which you can pass the name of an item and theCobWeb
// and the function returns the smallest web it was found inside of.
// Your code should work if someone were to modify theCobWeb.  
//  for example if you gave your program 
//    comb it should give back biggestWeb
//    toenails it should give back tinyWeb
//    headphones it should give back otherBigWeb
// HINT: you should use recursion
function isObject(o) {
    return typeof o == "object";
}

function findInObj(obj, itemName, webName) {
    for (key in obj) {
        if (key == "item") {
            if (obj[key] == itemName) {
                console.log(webName);
            }
        } else if (key == "items") {
            if (obj[key].indexOf(itemName) > -1) {
                console.log(webName);
            }
        } else {
            if (isObject(obj[key])) {
                findInObj(obj[key], itemName, key); // recursion
            }
        }
    }
}

// tests

// should console log biggestWeb
findInObj(theCobWeb, "comb", "theCobWeb");

// should console log tinyWeb
findInObj(theCobWeb, "toenails", "theCobWeb");

// should console log otherBigWeb  
findInObj(theCobWeb, "headphones", "theCobWeb");

console.log("should have returned biggestWeb, tinyWeb, otherBigWeb");


