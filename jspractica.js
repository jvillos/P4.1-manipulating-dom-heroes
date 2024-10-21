/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */

fetch("./data/heroes.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    console.log(jsondata);
    renderCards(jsondata);
  })
  .catch((e) => {
    console.log(e);
  });

  const accordeonTemplate = document.querySelector("#accordion-item").content;
  const items = document.querySelector(".accordion")

function renderCards(jsondata) {
  for (let char of jsondata.data.results) {
    let newItem = accordeonTemplate.cloneNode(true);

    newItem.querySelector(".accordion-button").innerHTML = char.name;
    newItem.querySelector(".accordion-body").innerHTML = char.description;

    items.append(newItem);
  }
}

renderCards(jsondata);


