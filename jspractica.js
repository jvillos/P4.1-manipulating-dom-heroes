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


    //i want to extract name, image, description, series and comics

    newItem.querySelector(".accordion-button").innerHTML = char.name;
    newItem.querySelector(".description").innerHTML = char.description;
    newItem.querySelector(".card-img-top").src = `${char.thumbnail.path}.${char.thumbnail.extension}`;
    newItem.querySelector(".accordion-collapse").setAttribute("data-bs-parent", `#${char.id}`);

    /*newItem.querySelector(".accordion-collapse").id = char.id;
    newItem.querySelector(".accordion-button").data-bs-target = `#${char.id}`;
    newItem.querySelector(".accordion-body").innerHTML = char.description;
    newItem.querySelector(".accordion-body").innerHTML = char.description;*/

    items.append(newItem);
  }
}
renderCards(jsondata);


