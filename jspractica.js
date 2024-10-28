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
    const uniqueId = `collapse-${char.id}`;

    //i want to extract name, image, description, series and comics

    newItem.querySelector(".accordion-button").innerHTML = char.name;

    if (char.description != '') {
      newItem.querySelector(".description").innerHTML = char.description;
    }else{
      newItem.querySelector(".description").innerHTML = "(no description available)";
    }
    newItem.querySelector(".card-img-top").src = `${char.thumbnail.path}.${char.thumbnail.extension}`;

    newItem.querySelector(".accordion-collapse").id = uniqueId;
    newItem.querySelector(".accordion-button").setAttribute("data-bs-target", `#${uniqueId}`);

    const comicsList = newItem.querySelector('.comics-list');
    const seriesList = newItem.querySelector('.series-list');

    
    char.comics.items.forEach(comic => {
      const listItem = document.createElement('li');
      listItem.textContent = comic.name;
      comicsList.appendChild(listItem);
    });

    char.series.items.forEach(series => {
      const listItem = document.createElement('li');
      listItem.textContent = series.name;
      seriesList.appendChild(listItem);
    });

    items.append(newItem);
  }
}
renderCards(jsondata);


