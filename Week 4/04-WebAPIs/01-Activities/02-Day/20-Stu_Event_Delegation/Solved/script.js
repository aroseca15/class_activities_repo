const addBtn = document.querySelector("#add-btn");
const peopleListEl = document.querySelector("#people-list");
const nameEl = document.querySelector("#name");
const modalEl = document.querySelector("#modal-container");
const modalNameEl = document.querySelector("#modal-name");
const descriptionEl = document.querySelector("#description");
const closeEl = document.querySelector(".close");
const saveBtn = document.querySelector("#save");

const people = [{ name: "Bob" }];
let currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  let name = nameEl.value;
  let li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  if (event.target.matches("button")) {
    event.preventDefault();
    modalEl.style.display = "block";
    currentId = parseInt(event.target.parentElement.id);
    let name = people[currentId].name;
    let description = people[currentId].description;
    modalNameEl.textContent = name;
    if(description) {
      descriptionEl.value = description;
    } else {
      descriptionEl.value = "";
    }
  }
}

closeEl.addEventListener("click", close);
saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  people[currentId].description = descriptionEl.value;
  close();
});

addBtn.addEventListener("click", addPersonToList);
peopleListEl.addEventListener("click", handleClick);
document.addEventListener("click", function(event) {
  if (event.target === modalEl) {
    close();
  }
});