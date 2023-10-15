// add event listeners to all checkboxes
for (let i = 1; i <= 50; i++) {
  const checkbox = document.getElementById(`item${i}`);
  checkbox.addEventListener("change", function () {
    // save the checkbox state in localstorage
    localStorage.setItem(`item${i}`, checkbox.checked);
  });

  // load the checkbox state from localstorage
  const isChecked = localStorage.getItem(`item${i}`) === "true";
  checkbox.checked = isChecked;
}

// make a summary
const h2Elements = document.querySelectorAll("h2");

// create a ul
const summaryList = document.createElement("ul");

// go through each h2
h2Elements.forEach((h2, index) => {
  // create a 'a' for each h2
  const link = document.createElement("a");
  link.href = `#h2-${index}`;
  link.textContent = h2.textContent;

  // create a li for each h2
  const listItem = document.createElement("li");
  listItem.appendChild(link);

  // add it to the ul
  summaryList.appendChild(listItem);

  // give a unique id to each h2
  h2.id = `h2-${index}`;
});

// put the summary at the top of the page
const todoList = document.getElementById("todo-list");
document.body.insertBefore(summaryList, todoList);

// collect all the quest buttons
const questButtons = document.querySelectorAll(".quest-button");

// show the quest linked to the item
function afficherQuete(event) {
  const questName = event.target.getAttribute("data-quest");
  alert(`Quête associée à cet objet : ${questName}`);
}

// add and addeventlistener
questButtons.forEach((button) => {
  button.addEventListener("click", afficherQuete);
});

// questData
// const questData = {};
// questButtons.forEach(button => {
//     const questName = button.getAttribute('data-quest');
//     if (questName) {
//         const questContent = `Contenu de la quête "${questName}"`;
//         questData[questName] = questContent;
//     }
// });
// console.log(questData);

const questNames = [
  "Jugement d'un pair",
  "L'appel de Boéthia",
  "La descente finale",
  "La fin du cauchemar",
  "La folie incarnée",
  "La marche macabre",
  "La mort incarnée",
  "La quête de l'extraordinaire",
  "Le balafré",
  "Le bâton de Magnus",
  "Le seul remède",
  "Les bienfaits de la nature",
  "Les fragments du passé",
  "Obscures réponses",
  "Perdue dans les Âges",
  "Relique perdue",
  "Sous Saarthal",
  "Toucher le ciel",
  "Une nuit mémorable",
];

// console.log(questNames);
